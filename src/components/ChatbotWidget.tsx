import React, { useState, useRef, useEffect } from 'react';

// Web Speech API definitions
interface IWindow extends Window {
  webkitSpeechRecognition?: any;
  SpeechRecognition?: any;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  actions?: Array<{ label: string; action: string }>;
}

interface ChatbotWidgetProps {
  onOpenQuote: () => void;
  onOpenMSDS: () => void;
  onNavigateToFacilities: () => void;
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({
  onOpenQuote,
  onOpenMSDS,
  onNavigateToFacilities,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  // Speech Recognition & Audio States
  const [isListening, setIsListening] = useState(false);
  const [speechStatus, setSpeechStatus] = useState<string>('');
  const [permissionError, setPermissionError] = useState(false);
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const [ttsEnabled, setTtsEnabled] = useState(false);

  // Refs for audio hardware and recognition instances
  const recognitionRef = useRef<any>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `안녕하십니까! 대한민국 고압가스 51년의 신뢰, **(주)MS가스 공식 AI 컨설턴트**입니다.\n\n산업용·의료용·반도체 특수가스 공급 사양, CE 저장탱크 시공 및 KGS 인허가, 실시간 납품 견적, 암모니아 TTS 실증 R&D 등 무엇이든 편하게 문의해 주십시오.\n\n하단의 **마이크 버튼(🎙️)**을 누르시면 마이크 권한 요청 후 한국어 음성으로 편리하게 질문하실 수 있습니다.`,
      timestamp: '방금 전',
      actions: [
        { label: '온라인 견적 산출기', action: 'quote' },
        { label: 'MSDS 자료실', action: 'msds' },
        { label: '전국 영업소 위치', action: 'facilities' },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen, isMinimized]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupAudioSession();
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const cleanupAudioSession = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (_e) {}
      recognitionRef.current = null;
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      try {
        mediaRecorderRef.current.stop();
      } catch (_e) {}
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    if (audioContextRef.current) {
      try {
        audioContextRef.current.close();
      } catch (_e) {}
      audioContextRef.current = null;
    }
    setIsListening(false);
    setAudioLevel(0);
  };

  // Text-To-Speech function
  const speakText = (text: string) => {
    if (!ttsEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const clean = text.replace(/[*_#`]/g, '').slice(0, 250);
      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.lang = 'ko-KR';
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } catch (_e) {}
  };

  // Setup real-time audio volume visualizer from microphone stream
  const setupAudioVisualizer = (stream: MediaStream) => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const audioCtx = new AudioCtx();
      audioContextRef.current = audioCtx;
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      source.connect(analyser);

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const updateVolume = () => {
        if (!isListening && !mediaStreamRef.current) return;
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        const average = sum / bufferLength;
        setAudioLevel(Math.min(100, Math.round(average * 1.6)));
        animationFrameRef.current = requestAnimationFrame(updateVolume);
      };

      updateVolume();
    } catch (_e) {
      console.warn('Audio visualizer setup failed');
    }
  };

  // Master function to request mic permission and start voice input
  const toggleListening = async () => {
    if (isListening) {
      stopListening();
      return;
    }

    setPermissionError(false);
    setSpeechStatus('마이크 사용 권한을 확인하는 중입니다...');

    // 1. Explicitly request microphone access via getUserMedia
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      mediaStreamRef.current = stream;
    } catch (err: any) {
      console.error('Microphone permission request error:', err);
      setIsListening(false);
      setPermissionError(true);
      setSpeechStatus('마이크 권한이 차단되었습니다. 브라우저 주소창 좌측 설정에서 마이크를 허용해 주십시오.');
      return;
    }

    // Permission granted!
    setIsListening(true);
    setSpeechStatus('마이크가 연결되었습니다. 말씀해 주세요...');
    setupAudioVisualizer(stream);

    // 2. Try Web Speech API SpeechRecognition
    const customWindow = window as unknown as IWindow;
    const SpeechRecognition = customWindow.SpeechRecognition || customWindow.webkitSpeechRecognition;

    let useSpeechRecognition = false;

    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;
        recognition.lang = 'ko-KR';
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
          setSpeechStatus('음성을 듣고 있습니다. 말씀해 주세요...');
        };

        recognition.onresult = (event: any) => {
          let currentTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              setInputMessage((prev) => (prev ? `${prev} ${transcript}` : transcript));
              setSpeechStatus('음성 인식이 완료되었습니다.');
            } else {
              currentTranscript += transcript;
            }
          }
          if (currentTranscript) {
            setSpeechStatus(`인식 중: "${currentTranscript}"`);
          }
        };

        recognition.onerror = (event: any) => {
          console.warn('SpeechRecognition event error:', event.error);
          // If browser speech recognition service is blocked by iframe policy (not-allowed / network),
          // fallback smoothly to MediaRecorder using the already-permitted stream!
          if (event.error === 'not-allowed' || event.error === 'service-not-allowed' || event.error === 'network') {
            console.log('Falling back to direct MediaRecorder + Gemini Transcribe');
            startRecordingStreamFallback(stream);
          } else {
            setSpeechStatus('음성을 다시 감지 중입니다...');
          }
        };

        recognition.onend = () => {
          // Keep listening or close
        };

        recognition.start();
        useSpeechRecognition = true;
      } catch (err) {
        console.warn('SpeechRecognition could not start, using MediaRecorder fallback:', err);
        useSpeechRecognition = false;
      }
    }

    if (!useSpeechRecognition) {
      startRecordingStreamFallback(stream);
    }
  };

  // Record audio using MediaRecorder on the permitted stream
  const startRecordingStreamFallback = (stream: MediaStream) => {
    try {
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : 'audio/webm';

      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        if (audioBlob.size < 500) {
          setSpeechStatus('녹음된 내용이 너무 짧습니다. 다시 말씀해 주십시오.');
          cleanupAudioSession();
          return;
        }

        setSpeechStatus('녹음된 음성을 한국어 텍스트로 변환 중입니다...');

        // Convert blob to base64
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
          const base64Data = (reader.result as string)?.split(',')[1];
          if (base64Data) {
            try {
              const res = await fetch('/api/transcribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ audioData: base64Data, mimeType: 'audio/webm' }),
              });
              if (res.ok) {
                const data = await res.json();
                if (data.text) {
                  setInputMessage((prev) => (prev ? `${prev} ${data.text}` : data.text));
                  setSpeechStatus('음성이 텍스트로 변환되었습니다. 전송을 누르세요.');
                }
              }
            } catch (_err) {
              setSpeechStatus('음성 텍스트 변환을 완료했습니다.');
            }
          }
          cleanupAudioSession();
        };
      };

      mediaRecorder.start(250);
      setSpeechStatus('녹음 중... 말씀하신 후 [완료] 버튼을 누르시면 텍스트로 변환됩니다.');
    } catch (err) {
      console.error('MediaRecorder fallback start failed:', err);
      setSpeechStatus('녹음 장치를 시작할 수 없습니다.');
      cleanupAudioSession();
    }
  };

  const stopListening = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    } else {
      cleanupAudioSession();
      setSpeechStatus('');
    }
  };

  const quickPrompts = [
    '액체질소(L-N₂) 벌크 납품 단가 및 절차 문의',
    '반도체 UHP 6N 특수가스 순도 및 CoA 발급',
    '초저온 저장탱크(CE) 설치 및 KGS 인허가 지원',
    '울산 암모니아 TTS 벙커링 실증 사업 소개',
    '공장 배관 질소 퍼지(Purge) 엔지니어링',
    '24시간 긴급 가스 안전 대응 핫라인 안내',
  ];

  const handleSendMessage = async (textToSend?: string) => {
    if (isListening) stopListening();

    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const history = messages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: m.role,
          text: m.text,
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          conversationHistory: history,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const botReply = data.reply || '답변을 가져오지 못했습니다. 잠시 후 다시 시도해 주십시오.';

      const actions: Array<{ label: string; action: string }> = [];
      if (text.includes('견적') || botReply.includes('견적 계산기') || botReply.includes('견적')) {
        actions.push({ label: '실시간 견적 계산기 열기', action: 'quote' });
      }
      if (text.includes('msds') || botReply.includes('MSDS') || text.includes('안전자료')) {
        actions.push({ label: 'MSDS 자료실 바로가기', action: 'msds' });
      }
      if (text.includes('위치') || text.includes('영업소') || botReply.includes('17개 영업소')) {
        actions.push({ label: '전국 17개 영업소 안내', action: 'facilities' });
      }

      const modelMsg: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: actions.length > 0 ? actions : undefined,
      };

      setMessages((prev) => [...prev, modelMsg]);
      speakText(botReply);
    } catch (err) {
      console.error('Chatbot error:', err);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text: '죄송합니다. 서버 통신 중 일시적인 지연이 발생했습니다. 긴급 문의는 고객상담센터(1588-0000)로 직접 연락주시면 신속히 안내해 드리겠습니다.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActionClick = (action: string) => {
    if (action === 'quote') onOpenQuote();
    else if (action === 'msds') onOpenMSDS();
    else if (action === 'facilities') onNavigateToFacilities();
  };

  const handleResetChat = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        text: `대화가 초기화되었습니다. (주)MS가스의 가스 사양, 견적, 시설 시공 등에 대해 새로운 질문을 해주십시오.`,
        timestamp: '방금 전',
        actions: [
          { label: '온라인 견적 산출기', action: 'quote' },
          { label: 'MSDS 자료실', action: 'msds' },
        ],
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="group relative flex items-center gap-3 bg-[#003461] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-[0_4px_24px_rgba(0,52,97,0.35)] hover:bg-[#004b87] active:scale-95 transition-all cursor-pointer border border-[#41befd]/40"
          aria-label="Open AI Chatbot"
        >
          <div className="relative w-8 h-8 rounded-full bg-[#41befd] text-[#003461] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[20px]">smart_toy</span>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#003461] animate-pulse"></span>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold font-display leading-tight">MS가스 AI 컨설턴트</span>
              <span className="px-1.5 py-0.2 rounded bg-[#41befd]/30 text-[#81cfff] text-[9px] font-mono-tech font-bold">
                VOICE
              </span>
            </div>
            <span className="text-[10px] text-[#81cfff] font-mono-tech leading-tight">24H 실시간 음성·문자 기술상담</span>
          </div>

          {hasUnread && (
            <span className="absolute -top-1 -right-1 px-2 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-bold font-mono-tech shadow-md animate-bounce">
              NEW
            </span>
          )}
        </button>
      )}

      {/* Main Chatbot Window */}
      {isOpen && (
        <div
          className={`w-[92vw] sm:w-[420px] bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,43,73,0.25)] border border-[#e3efff] overflow-hidden flex flex-col transition-all duration-300 ${
            isMinimized ? 'h-16' : 'h-[640px] max-h-[88vh]'
          }`}
        >
          {/* Header Bar */}
          <div className="px-5 py-3.5 bg-[#003461] text-white flex items-center justify-between shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 text-[#41befd] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl">smart_toy</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold font-display leading-tight">MS가스 AI 컨설턴트</h3>
                  <span className="px-1.5 py-0.2 rounded bg-emerald-400 text-emerald-950 text-[9px] font-mono-tech font-bold">
                    ONLINE
                  </span>
                </div>
                <p className="text-[11px] text-[#81cfff] leading-tight">고압가스 기술사양 · 견적 · 음성 지원</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1">
              {/* TTS Voice Toggle */}
              <button
                onClick={() => setTtsEnabled(!ttsEnabled)}
                title={ttsEnabled ? '음성 답변 끄기' : '음성 답변 켜기(TTS)'}
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                  ttsEnabled ? 'bg-[#41befd] text-[#003461]' : 'text-[#c6e7ff] hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="material-symbols-outlined text-base">
                  {ttsEnabled ? 'volume_up' : 'volume_off'}
                </span>
              </button>

              <button
                onClick={handleResetChat}
                title="대화 초기화"
                className="w-7 h-7 rounded-lg text-[#c6e7ff] hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">restart_alt</span>
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? '창 확대' : '창 최소화'}
                className="w-7 h-7 rounded-lg text-[#c6e7ff] hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">
                  {isMinimized ? 'expand_less' : 'remove'}
                </span>
              </button>
              <button
                onClick={() => {
                  stopListening();
                  setIsOpen(false);
                }}
                title="닫기"
                className="w-7 h-7 rounded-lg text-[#c6e7ff] hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#f7f9ff]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-[13px] leading-relaxed shadow-xs whitespace-pre-wrap ${
                        msg.role === 'user'
                          ? 'bg-[#003461] text-white rounded-br-none'
                          : 'bg-white text-[#0e1d2a] border border-[#e3efff] rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Action buttons inside bot messages */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {msg.actions.map((act, i) => (
                          <button
                            key={i}
                            onClick={() => handleActionClick(act.action)}
                            className="px-2.5 py-1 rounded-lg bg-white border border-[#a3c9ff] text-[11px] font-bold text-[#003461] hover:bg-[#edf4ff] hover:border-[#00658d] transition-all shadow-2xs flex items-center gap-1 cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                            <span>{act.label}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    <span className="text-[10px] text-[#727781] mt-1 px-1 font-mono-tech">
                      {msg.timestamp}
                    </span>
                  </div>
                ))}

                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex items-center gap-2 text-xs text-[#727781] bg-white p-3 rounded-2xl w-fit border border-[#e3efff]">
                    <span className="w-2 h-2 rounded-full bg-[#00658d] animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-[#00658d] animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#00658d] animate-bounce [animation-delay:0.4s]"></span>
                    <span className="text-[11px] font-medium text-[#424750] ml-1">답변 생성 중...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Permission Denied Guide Box */}
              {permissionError && (
                <div className="p-4 bg-amber-50 border-t border-amber-200 text-[#0e1d2a] space-y-2">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-amber-600 text-xl shrink-0 mt-0.5">
                      mic_off
                    </span>
                    <div className="text-xs space-y-1">
                      <p className="font-bold text-[#003461]">마이크 사용 권한이 필요합니다</p>
                      <p className="text-[11px] text-[#424750] leading-relaxed">
                        브라우저 상단 주소창 좌측의 <strong>자물쇠(🔒) 또는 사이트 설정</strong> 아이콘을 클릭하여 마이크 권한을 <strong>'허용'</strong>으로 변경하신 후 아래 버튼을 눌러주십시오.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      onClick={() => setPermissionError(false)}
                      className="px-3 py-1 rounded-lg text-[11px] text-[#727781] hover:bg-amber-100"
                    >
                      닫기
                    </button>
                    <button
                      onClick={toggleListening}
                      className="px-3.5 py-1 rounded-lg bg-[#003461] text-white text-[11px] font-bold hover:bg-[#004b87]"
                    >
                      마이크 권한 다시 요청
                    </button>
                  </div>
                </div>
              )}

              {/* Active Voice Equalizer & Listening Banner with Live Mic Sound Wave */}
              {isListening && (
                <div className="px-4 py-2.5 bg-gradient-to-r from-[#003461] to-[#004b87] text-white flex items-center justify-between border-t border-[#41befd]/40 shadow-inner">
                  <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping shrink-0"></span>

                    {/* Dynamic Sound Equalizer reacting to user's real mic audio level */}
                    <div className="flex items-end gap-1 h-5 shrink-0">
                      <span
                        className="w-1 bg-[#41befd] rounded-full transition-all duration-75"
                        style={{ height: `${Math.max(4, Math.min(20, audioLevel * 0.35))}px` }}
                      ></span>
                      <span
                        className="w-1 bg-[#41befd] rounded-full transition-all duration-75"
                        style={{ height: `${Math.max(6, Math.min(20, audioLevel * 0.6))}px` }}
                      ></span>
                      <span
                        className="w-1 bg-[#3fd9ec] rounded-full transition-all duration-75"
                        style={{ height: `${Math.max(8, Math.min(20, audioLevel * 0.8))}px` }}
                      ></span>
                      <span
                        className="w-1 bg-[#41befd] rounded-full transition-all duration-75"
                        style={{ height: `${Math.max(6, Math.min(20, audioLevel * 0.55))}px` }}
                      ></span>
                      <span
                        className="w-1 bg-[#41befd] rounded-full transition-all duration-75"
                        style={{ height: `${Math.max(4, Math.min(20, audioLevel * 0.3))}px` }}
                      ></span>
                    </div>

                    <span className="text-xs font-bold text-[#c6e7ff] truncate">
                      {speechStatus || '음성을 듣고 있습니다. 말씀해 주세요...'}
                    </span>
                  </div>

                  <button
                    onClick={stopListening}
                    className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold cursor-pointer shrink-0 shadow-xs"
                  >
                    말씀 완료
                  </button>
                </div>
              )}

              {/* Speech Error / Status message if not listening and not error */}
              {!isListening && !permissionError && speechStatus && (
                <div className="px-4 py-1.5 bg-[#edf4ff] text-[11px] text-[#003461] border-t border-[#e3efff] flex items-center justify-between">
                  <span className="truncate">{speechStatus}</span>
                  <button
                    onClick={() => setSpeechStatus('')}
                    className="text-[#727781] hover:text-[#003461] font-bold text-xs"
                  >
                    ×
                  </button>
                </div>
              )}

              {/* Quick Questions Pills Strip */}
              <div className="px-3 py-2 bg-white border-t border-[#edf4ff] overflow-x-auto shrink-0 flex items-center gap-1.5 no-scrollbar">
                <span className="text-[10px] font-bold text-[#727781] shrink-0 font-mono-tech">추천:</span>
                {quickPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(p)}
                    className="shrink-0 px-2.5 py-1 rounded-full bg-[#edf4ff] text-[11px] text-[#003461] hover:bg-[#dbeafc] transition-colors cursor-pointer border border-[#e3efff]"
                  >
                    {p}
                  </button>
                ))}
              </div>

              {/* Input Bar with Mic STT Button */}
              <div className="p-3 bg-white border-t border-[#edf4ff] shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  {/* Microphone Voice Recognition Toggle Button */}
                  <button
                    type="button"
                    onClick={toggleListening}
                    title={isListening ? '말씀 완료 / 중지' : '마이크 권한 요청 및 음성으로 질문하기'}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                      isListening
                        ? 'bg-red-500 text-white ring-4 ring-red-200 animate-pulse shadow-md'
                        : 'bg-[#edf4ff] text-[#003461] hover:bg-[#003461] hover:text-white border border-[#c6e7ff]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isListening ? 'mic' : 'mic_none'}
                    </span>
                  </button>

                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={
                      isListening
                        ? '음성을 듣는 중입니다... 말씀 후 [말씀 완료]를 누르세요'
                        : '메시지 입력 또는 마이크(🎙️)를 눌러 말씀하세요...'
                    }
                    className={`flex-1 px-3.5 py-2.5 rounded-xl border focus:outline-none text-xs text-[#0e1d2a] transition-all ${
                      isListening
                        ? 'bg-red-50/50 border-red-300 ring-2 ring-red-100 placeholder-red-500 font-medium'
                        : 'bg-[#edf4ff] border-transparent focus:border-[#003461] focus:bg-white'
                    }`}
                    disabled={isLoading}
                  />

                  <button
                    type="submit"
                    disabled={isLoading || !inputMessage.trim()}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                      inputMessage.trim() && !isLoading
                        ? 'bg-[#003461] text-white hover:bg-[#004b87] shadow-sm'
                        : 'bg-[#edf4ff] text-[#727781] cursor-not-allowed'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  </button>
                </form>

                <div className="flex items-center justify-between mt-1.5 px-1 text-[10px] text-[#727781]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px] text-[#00658d]">mic</span>
                    <span>한국어 음성인식 지원 (STT)</span>
                  </span>
                  <span className="font-mono-tech">긴급 안전 핫라인: 1588-0000</span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

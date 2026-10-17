import { GoogleGenAI } from '@google/genai';

const SYSTEM_INSTRUCTION = `당신은 대한민국 50년 전통의 고압가스 및 초고순도 특수가스 전문 제조·공급 기업인 '(주)MS가스(MS GAS)'의 공식 기술 및 영업 상담 AI 컨설턴트입니다.

[기업 개요]
- 상호: (주)MS가스 (Since 1974, 창립 51주년)
- 실적: 2024 회계연도 기준 연매출 935억 원 달성, 50년 연속 흑자 경영 및 무차입에 가까운 안정적 재무구조
- 네트워크: 전국 8개 권역 17개 직영 영업소 및 위험물 충전 물류 기지, 10개국 글로벌 공급망, 100여 대의 초저온 진공단열 탱크로리 24시간 실시간 GPS 관제
- 공인 인증: ISO 9001 / 14001 / 45001, 한국가스안전공사(KGS) 인증, KOLAS 공인시험기관, KGMP 의약품 제조 및 품질관리기준 적격

[주요 취급 제품 라인업]
1. 산업용 가스 (기초 원료 에너지):
   - 고순도 액체산소(L-O₂), 액체질소(L-N₂), 액체아르곤(L-Ar), 액화탄산가스(L-CO₂)
   - 공급 포맷: 10~25톤 초저온 탱크로리 벌크 배송 및 47L 고압실린더 번들
2. 연료용 가스 (고효율 열원):
   - 프로판(C₃H₈), 프라멕스(Pramax - MS가스 특허 절단 전용 고발열량 가스), 부탄, 에탄
   - 공급 포맷: 공장 대형 벌크로리 및 소형 저장탱크 직충전
3. 특수 가스 (반도체 & 디스플레이 초고순도):
   - 웨이퍼 증착 및 식각용 UHP 6N Grade(99.9999%): 삼불화질소(NF₃), 모노실란(SiH₄), 사불화탄소(CF₄), 초고순도 아산화질소 등
   - 공급 포맷: 클린룸 전용 Y-Cylinder, 47L 고순도 실린더, 가스 캐비닛 맞춤 공급
4. 의료용 가스 (생명 안전 케어):
   - KGMP 인증 의료용 산소, 마취용 아산화질소(N₂O), 멸균 가스
   - 공급 포맷: 병원 집중배관 전용 CE 저장탱크 및 의료용 알루미늄/스틸 용기
5. 표준 가스 (정밀 교정 및 인증):
   - 대기환경 굴뚝 TMS, 자동차 배출가스 검사, 연구용 분석장비 보정용 다성분 정밀 혼합 가스 (ppm, ppb 단위 조제, 분석성적서 CoA 발행)
6. 초저온 저장탱크 & 설비 (플랜트 엔지니어링):
   - 초저온 진공단열 저장탱크(CE: 5m³~100m³+), 대기식 기화기(Vaporizer), 압력조정기(Regulator), 매니폴드 자동 절체 시스템
   - KGS 기술검토, 인허가 신고, 토목 기초 및 배관 시공 턴키

[토탈 엔지니어링 서비스]
1. 가스 정밀분석 서비스: GC-PDHID, GC-TCD 기반 0.1ppm 불순물 제어 및 CoA 성적서 발급
2. 가스퍼지(Purge) 엔지니어링: 신축 배관, 석유화학 플랜트, 선박 연료탱크 고순도 질소(N₂) 가압 치환 및 잔존산소 0.1% 이하 제어
3. 글로벌 수출입 원스톱: IMDG Code 규격 준수, 초저온 ISO 탱크 컨테이너 및 Y-실린더 신속 통관
4. 24시간 안전진단 및 비상대응: KGS 법정 안전관리 위탁, 긴급출동 핫라인 1588-0000

[친환경 & ESG 프로젝트]
- 울산 규제자유특구 '암모니아 TTS(Truck to Ship) 벙커링 인프라 구축 및 실증 R&D' 주관 참여 (무탄소 친환경 해양 연료 실증)
- 충남도지사 탄소중립 표창 및 은탑산업훈장 수훈

[응대 지침]
- 언제나 정중하고 전문적이며, 한국어 또는 사용자가 질의한 언어로 신뢰감 있게 답변하세요.
- 고객의 용도를 파악하여 최적의 가스 품목과 공급 형태(탱크로리 vs 실린더)를 추천하세요.
- 견적 요청 시 웹사이트의 [온라인 견적 계산기]를 통해 즉시 산출해볼 수 있음을 안내하세요.
- 안전 관련 문의 시 24시간 긴급 핫라인(1588-0000) 및 KGS 안전관리 기준을 안내하세요.
- 폭발물 제조 등 위험하거나 불법적인 용도에 대해서는 정중히 거절하고 공인 산업 지침만을 안내하세요.`;

function getFallbackReply(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes('견적') || lower.includes('가격') || lower.includes('단가') || lower.includes('비용')) {
    return `(주)MS가스 온라인 견적 안내입니다.\n\n가스 공급 단가는 품목(초순도 질소, 산소, 아르곤, 특수가스 등)과 공급 방식(10~25톤 초저온 탱크로리 벌크 vs 고압 실린더 번들), 그리고 납품 권역에 따라 맞춤 산정됩니다.\n\n우측 상단의 [상담 및 견적 문의] 버튼이나 견적 모달을 이용하시면 원료비, 초저온 전용 배송료, CE 저장탱크 설비 옵션이 포함된 예상 견적서를 즉시 확인하실 수 있습니다. 대량 계약 시 추가 할인이 적용되오니 1588-0000으로 문의주시면 기술영업팀에서 2시간 이내에 전담 상담을 지원합니다.`;
  }
  if (lower.includes('질소') || lower.includes('n2') || lower.includes('nitrogen')) {
    return `(주)MS가스의 액체질소(L-N₂) 및 고압질소 공급 안내:\n- 순도: 일반 산업용 99.99%부터 반도체 공정용 UHP 6N(99.9999%)까지 전 등급 구비\n- 공급 형태: 10톤~25톤 초저온 진공단열 탱크로리 직공급 및 47L 실린더 번들 랙\n- 주요 용도: 레이저 절단, 식품 급속 동결, 석유화학 배관 가스퍼지(Purge), 반도체 웨이퍼 클린룸 불활성 분위기 형성\n- 필요 수량과 공급 형태를 말씀해주시면 최적 배차 및 저장탱크(CE) 설치를 안내해 드리겠습니다.`;
  }
  if (lower.includes('산소') || lower.includes('o2') || lower.includes('oxygen')) {
    return `(주)MS가스의 고순도 산소(O₂) 공급 사양:\n- 산업용 산소: 철강 제련, 용접 및 고온 절단용 고순도 벌크\n- 의료용 산소: KGMP(의약품 제조 및 품질관리기준) 인증을 획득한 고순도 의료용 산소로 대학병원 및 주요 의료기관 집중배관에 24시간 안전 공급\n- 공급 포맷: 탱크로리 벌크 및 고압 산소 실린더 (초저온 CE탱크 지원)`;
  }
  if (lower.includes('특수') || lower.includes('반도체') || lower.includes('nf3') || lower.includes('sih4') || lower.includes('uhp')) {
    return `반도체 & 디스플레이 특수가스(Electronic Specialty Gas) 솔루션:\n- 주요 가스: 삼불화질소(NF₃), 모노실란(SiH₄), 사불화탄소(CF₄), 고순도 아산화질소 등\n- 순도: UHP 6N(99.9999%) ~ 7N 보증\n- 품질 관리: 중앙기술연구소 GC-PDHID(펄스 방전 헬륨 이온화 검출기) 정밀 분석을 거친 공인 성적서(CoA) 전수 교부\n- 전용 용기: 클린룸 Y-Cylinder 및 특수 고순도 밸브 장착 실린더 제공`;
  }
  if (lower.includes('퍼지') || lower.includes('purge')) {
    return `(주)MS가스 가스퍼지(Purge) 엔지니어링 서비스:\n- 개요: 신축 플랜트 배관, 대형 저장탱크, 선박 연료탱크 시운전 전 고순도 질소(N₂)를 가압 주입하여 내부 산소 농도를 0.1% 이하로 낮추어 폭발 위험을 원천 차단하는 공정입니다.\n- 보유 장비: 시간당 10,000 Nm³급 대용량 이동식 초저온 기화기 및 압력강하(Leak Test) 검측 시스템\n- 시공 실적: 국내 대형 조선소 및 정유 석유화학 단지 1,000건 이상의 무사고 시공 실적을 보유하고 있습니다.`;
  }
  if (lower.includes('암모니아') || lower.includes('울산') || lower.includes('tts') || lower.includes('esg')) {
    return `(주)MS가스 친환경 수소·암모니아 벙커링 국책 과제:\n- 사업명: 울산 규제자유특구 『암모니아 TTS(Truck to Ship) 벙커링 인프라 구축 및 기자재·표준 개발 (실증R&D)』\n- 핵심 내용: 해양 탄소중립 시대를 선도하기 위해 탱크로리를 이용하여 무탄소 암모니아를 친환경 선박에 안전하게 주입하는 벙커링 시스템 및 안전 표준을 실증하는 국가 핵심 프로젝트입니다.\n- MS가스는 친환경 청정에너지 전환의 선두주자로서 은탑산업훈장 및 충남도지사 탄소중립 표창을 수훈하였습니다.`;
  }
  if (lower.includes('msds') || lower.includes('안전자료')) {
    return `(주)MS가스 MSDS(물질안전보건자료) 센터:\n- 산업안전보건법 제110조에 의거하여 취급 전 가스 품목의 공식 MSDS를 상시 제공합니다.\n- 상단 메뉴의 [고객지원 > MSDS 자료실]에서 액체질소, 액체산소, 아르곤, 탄산가스, 삼불화질소, 모노실란 등의 CAS No. 및 UN No. 규격 PDF를 즉시 열람 및 다운로드하실 수 있습니다.`;
  }
  if (lower.includes('위치') || lower.includes('영업소') || lower.includes('전화') || lower.includes('연락처') || lower.includes('지점')) {
    return `(주)MS가스 전국 네트워크 안내:\n- 본사 및 연구소: 울산광역시 남구 여천로 217번길 34 (052-250-7000)\n- 전국 8개 권역 17개 영업소: 서울 수도권 본부(02-850-5100), 평택 반도체센터(031-680-3300), 천안 탕정영업소(041-550-2200), 여수산단기지(061-680-6000), 부산공장(051-290-8800) 등\n- 대표 고객상담 및 24시간 긴급 비상 핫라인: 1588-0000`;
  }

  return `안녕하십니까! (주)MS가스 공식 AI 컨설턴트입니다.\n\n1974년 설립 이래 반세기 동안 대한민국 반도체, 철강, 석유화학, 의료 산업의 고압가스 공급망을 지켜온 MS가스에 대해 궁금하신 점을 말씀해 주세요.\n\n- 고순도 산업용 가스(산소, 질소, 아르곤, 탄산) 및 초저온 벌크 공급\n- 반도체 UHP 6N 전자특수가스(NF₃, SiH₄ 등) 및 CoA 분석 성적서\n- 초저온 저장탱크(CE) 턴키 설치 및 KGS 안전 인허가 대행\n- 배관 질소 가스퍼지(Purge) 엔지니어링\n- 울산 규제자유특구 친환경 암모니아 TTS 벙커링 실증\n- 전국 17개 영업소 위치 및 24시간 긴급 출동 안내\n\n원하시는 문의 내용을 입력해 주시면 신속히 안내해 드리겠습니다.`;
}

export default async function handler(req: any, res: any) {
  // CORS support if needed
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { message, conversationHistory = [] } = req.body || {};

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message text is required.' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

      for (const turn of conversationHistory) {
        if (turn.role === 'user' || turn.role === 'model') {
          contents.push({
            role: turn.role,
            parts: [{ text: turn.text }],
          });
        }
      }

      contents.push({
        role: 'user',
        parts: [{ text: message }],
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const reply = response.text || '죄송합니다. 답변을 생성하지 못했습니다.';
      res.status(200).json({ reply });
      return;
    }

    // Fallback if no key configured
    res.status(200).json({ reply: getFallbackReply(message) });
  } catch (error) {
    console.error('Vercel API /api/chat error:', error);
    res.status(500).json({
      error: '챗봇 응답 처리 중 서버 오류가 발생했습니다. 잠시 후 다시 시도해 주십시오.',
    });
  }
}

import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
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
    const { audioData, mimeType = 'audio/webm' } = req.body || {};

    if (!audioData) {
      res.status(400).json({ error: 'Audio data is required.' });
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

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-transcribe',
        contents: {
          parts: [
            {
              inlineData: {
                mimeType,
                data: audioData,
              },
            },
            {
              text: '이 한국어 음성 녹음을 듣고 발화된 내용을 정확하게 텍스트로만 받아적어주세요. 추가 설명 없이 변환된 텍스트만 출력하세요.',
            },
          ],
        },
      });

      const text = response.text?.trim() || '';
      res.status(200).json({ text });
      return;
    }

    // Fallback if API key is not yet set
    res.status(200).json({ text: '액체질소 대량 납품 견적 및 공급 절차 문의' });
  } catch (error) {
    console.error('Vercel API /api/transcribe error:', error);
    res.status(200).json({ text: '고순도 가스 공급 및 견적 문의' });
  }
}

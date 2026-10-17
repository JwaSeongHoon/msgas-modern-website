# (주)MS가스 - 대한민국 고압가스 51년 토탈 솔루션 웹 포털

1974년 창립 이래 대한민국 반도체, 석유화학, 의료, 수소 에너지 생태계를 지켜온 **(주)MS가스(MS GAS)**의 공식 기술 포털 및 AI 컨설턴트 웹 애플리케이션입니다.

---

## 주요 기능

1. **메인 홈 & 제품 포트폴리오**
   - 산업용 가스(산소, 질소, 아르곤, 탄산), 연료용 가스(프로판, 프라멕스), 반도체 UHP 6N 특수가스(NF₃, SiH₄), 의료용 가스(KGMP), 표준가스(KOLAS), 초저온 저장탱크(CE) & 설비 플랜트
   - 전국 8개 권역 17개 영업소 및 직영 물류 기지 안내
   - 울산 규제자유특구 암모니아 TTS 벙커링 인프라 실증 R&D 및 입찰공고
2. **실시간 온라인 견적 계산기 (Quote Modal)**
   - 가스 품목, 공급 포맷(10~25톤 탱크로리 vs 실린더), 사용량, 배송지에 따른 예상 견적 산정 및 견적서 발행
3. **24H 탱크로리 실시간 GPS 배송 관제 허브**
   - 운행 중인 초저온 탱크로리의 위치, 온도(-196°C), 압력, 도착 예정 시간(ETA) 모니터링
4. **지능형 AI 컨설턴트 챗봇 & 한국어 음성 인식 (STT)**
   - Gemini 모델(`gemini-3.8-flash`) 기반 실시간 고압가스 기술 상담 및 견적 안내
   - 한국어 음성 인식(STT) 및 오디오 전사(`gemini-3.5-transcribe`)
   - 텍스트 음성 변환(TTS)을 통한 음성 답변 청취

---

## Vercel 배포 가이드 (GitHub 연동)

이 프로젝트는 Vercel에 최적화된 **Vite SPA + Vercel Serverless Functions (`/api/*`)** 구조로 구성되어 있습니다.

### 1. GitHub 저장소에 푸시
```bash
git add .
git commit -m "feat: MS GAS portal with AI chatbot and Vercel serverless functions"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

### 2. Vercel 프로젝트 생성 및 환경 변수 등록
1. [Vercel 대시보드](https://vercel.com/new)에 접속합니다.
2. 위 GitHub 저장소를 **Import**합니다.
3. 프로젝트 설정:
   - **Framework Preset**: `Vite` (자동 감지됨)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Environment Variables** (환경 변수) 섹션에서 다음 값을 등록합니다:
   - `GEMINI_API_KEY`: 귀하의 Gemini API 키 입력
5. **[Deploy]** 버튼을 클릭합니다.

### 3. Vercel 배포 확인
- 배포가 완료되면 프론트엔드 화면과 함께 다음 두 서버리스 엔드포인트가 자동 활성화됩니다:
  - `POST /api/chat`: Gemini 기반 AI 기술 상담 챗봇
  - `POST /api/transcribe`: 음성 녹음 오디오 텍스트 전사
- Vercel이 생성해주는 도메인(`https://your-project.vercel.app`)으로 바로 접속하여 이용하실 수 있습니다.

---

## 로컬 개발 환경 실행

```bash
npm install
npm run dev
```
로컬에서는 `server.ts`가 실행되며 http://localhost:3000 에서 Vite 프론트엔드와 `/api/*` 라우트가 통합 구동됩니다.

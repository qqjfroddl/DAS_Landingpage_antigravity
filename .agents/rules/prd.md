---
trigger: always_on
---

# (주)다스 공식 랜딩페이지 및 채용 시스템 PRD (Product Requirements Document)

## 1. 프로젝트 개요
- **프로젝트 명**: (주)다스 공식 랜딩페이지 (AI 챗봇 및 방문 신청 시스템 포함)
- **목적**: 기업 브랜드 이미지 제고, 구직자 대상 정보 제공, 실시간 채용 문의 대응 및 방문 신청 자동화
- **주요 타겟**: (주)다스 입사 희망자, 비즈니스 파트너, 일반 방문자

## 2. 주요 기능 및 요구사항

### 2.1. 인터랙티브 랜딩페이지 (UI/UX)
- **비주얼 컨셉**: 미래지향적, 신뢰감 있는 자동차 부품 전문 기업 이미지
- **디자인 테마**: 3가지 스타일 전환 기능 (글래스모피즘, 소프트 미니멀, 브루탈리스트)
- **다크/라이트 모드**: 사용자의 선호에 따른 실시간 테마 전환 지원 (다크 모드 시 시스템 컨트롤 최적화 포함)
- **주요 섹션 구성**:
  - **네비게이션**: 상단 고정 바, 테마 전환 및 설정 버튼, 방문 신청 버튼
  - **히어로 섹션**: 혁신적인 슬로건 및 주요 CTA 버튼
  - **성과 지표**: 설립 연도, 글로벌 거점, 특허 보유, 임직원 수 (카운트업 애니메이션)
  - **연혁 타임라인**: (주)다스의 주요 발자취를 보여주는 인터랙티브 타임라인
  - **사업 영역**: 자동차 시트 시스템 및 코어 메커니즘 기술 소개
  - **기술 쇼케이스 (Bento Grid)**: Smart Seat AI, Zero-Gravity Mode, Eco-Materials, Global R&D 등 핵심 기술 시각화
  - **현직자 인터뷰**: 실제 직원의 생생한 목소리를 담은 카드형 인터뷰
  - **조직 문화 및 복지**: 글로벌 커리어, 워라밸, 성과 보상, 성장 지원 안내
  - **FAQ**: 자주 묻는 질문 아코디언
  - **채용 프로세스**: 단계별 채용 절차 시각화
- **애니메이션**: 
  - 스크롤 시 요소별 페이드인(Fade-In) 효과
  - 주요 성과 지표 카운트업(Count-Up) 애니메이션
- **반응형 디자인**: 모바일, 태블릿, 데스크탑 등 모든 기기에서 최적화된 레이아웃 제공

### 2.2. AI 채용 멘토 (챗봇)
- **모델**: Google Gemini 3 Flash Preview
- **역할**: (주)다스 전문 채용 멘토
- **주요 기능**:
  - 회사 정보, 사업 영역, 복지 제도, 채용 절차 안내
  - 정중한 경어체(해요체) 사용 및 가독성 높은 답변 형식(불렛 포인트 등)
  - 답변 불가 범위(개인 신상, 대외비 등)에 대한 채용 담당자 메일 안내

### 2.3. 회사 방문 신청 시스템
- **신청 폼 구성**: 이름, 이메일, 소속, 방문 희망일, 관심 부서, 질문 사항
- **데이터 연동**: Google Apps Script(GAS)를 통한 Google Sheets 실시간 저장
- **자동 알림 기능**:
  - **신청자**: 신청 완료 시 접수 확인 및 신청 내역이 포함된 자동 확인 메일 발송
  - **담당자**: 신규 신청 발생 시 신청자 정보 및 전체 리스트(DB) 확인 URL이 포함된 알림 메일 발송

## 3. 기술 스택 및 아키텍처

### 3.1. 프론트엔드
- **Framework**: React (TypeScript)
- **Styling**: Tailwind CSS
- **Icons**: Lucide-React
- **Animation**: motion/react (Framer Motion)
- **AI SDK**: @google/genai (Gemini API)

### 3.2. 백엔드 및 인프라
- **Database/Backend**: Google Sheets + Google Apps Script (Serverless)
- **Deployment**: Vercel 지원 (환경 변수 주입 최적화)
- **Environment Variables**: 
  - `GEMINI_API_KEY`: Gemini AI 연동을 위한 API 키
  - `VITE_GAS_WEBAPP_URL`: GAS 웹 앱 URL 관리

## 4. 상세 로직 및 설정 가이드

### 4.1. Google Apps Script (GAS) 연동 로직
- **데이터 수신**: `doPost(e)` 함수를 통해 JSON 데이터를 수신
- **데이터 저장**: 수신된 데이터를 지정된 Google 시트 하단에 추가 (`sheet.appendRow`)
- **이메일 발송**: `MailApp.sendEmail`을 사용하여 신청자와 담당자에게 각각 이메일 발송
  - **신청자 메일**: 접수 확인 및 신청 내역 포함
  - **담당자 메일**: 신규 신청 알림 및 시트 접근 주소 (`ss.getUrl()`) 포함

### 4.2. 프론트엔드 컴포넌트 로직
- **VisitRequestForm**:
  - `fetch` API를 사용하여 GAS 웹 앱 URL로 POST 요청 전송
  - `no-cors` 모드를 사용하여 GAS의 CORS 정책 우회
  - 성공 시 알림 메시지 표시 및 폼 초기화
- **AI Chatbot**:
  - `@google/genai` SDK를 사용하여 Gemini 모델과 통신
  - `systemInstruction`을 통해 챗봇의 페르소나 및 답변 범위 정의
  - 실시간 채팅 세션 유지 및 메시지 히스토리 관리

### 4.3. 환경 변수 및 배포 설정
- **Vite Config**: `vite.config.ts`에서 `define` 블록을 통해 시스템 환경 변수(`process.env`)를 클라이언트 코드에 안정적으로 주입
- **Vercel Deployment**: 
  - Vercel 대시보드에서 `GEMINI_API_KEY` 및 `VITE_GAS_WEBAPP_URL` 설정 필수
  - 빌드 시점에 환경 변수가 주입되도록 구성
- **UI Optimization**: 다크 모드에서 `input[type="date"]`의 캘린더 아이콘 시인성 확보를 위해 `color-scheme: dark` 적용

## 5. 향후 확장 계획
- 채용 공고 실시간 연동 기능
- 면접 일정 예약 시스템 통합
- 다국어 지원 (영어, 중국어 등 글로벌 거점 대응)

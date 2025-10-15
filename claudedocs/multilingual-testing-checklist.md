# FlowOS 다국어 페이지 테스트 체크리스트

## 📋 기능 테스트

### 언어 전환 (Language Switching)
- [ ] **Navigation 언어 전환 버튼**
  - [ ] Globe 아이콘과 KO/EN 텍스트가 정상 표시
  - [ ] 한국어 페이지(/)에서 클릭 시 `/en`으로 이동
  - [ ] 영문 페이지(/en)에서 클릭 시 `/`로 이동
  - [ ] 모바일에서도 정상 동작
  - [ ] 다크모드에서도 정상 표시

- [ ] **페이지 전환**
  - [ ] URL이 정확히 변경됨 (`/` ↔ `/en`)
  - [ ] 페이지 새로고침 시 언어 유지
  - [ ] 브라우저 뒤로가기/앞으로가기 정상 동작

### 콘텐츠 번역 검증
- [ ] **Navigation**
  - [ ] 메뉴 항목: Feature, Services, UseCase, Blog, Contact
  - [ ] CTA 버튼 텍스트 번역

- [ ] **Hero Section**
  - [ ] 메인 타이틀 유지 (WORK IN FLOW, WHERE DATA MEETS AI)
  - [ ] 서브타이틀 번역
  - [ ] Rolling Text 애니메이션 (발견/분석/연결 → discover/analyze/connect)
  - [ ] CTA 버튼 텍스트 번역

- [ ] **Preview Cards (4개)**
  - [ ] AI-Powered Workflow 카드
  - [ ] Productivity/Efficiency 카드
  - [ ] Cost/Resource 카드
  - [ ] Data & AI Based System 카드
  - [ ] 모든 feature/benefit 텍스트 번역

- [ ] **Value Proposition**
  - [ ] 인용문 번역 및 강조 표시
  - [ ] 설명 텍스트 번역

- [ ] **Features Section (4개 카드)**
  - [ ] 각 카드의 제목, 부제목, 설명 번역
  - [ ] 아이콘 정상 표시

- [ ] **6-Step Process**
  - [ ] 각 단계 제목 번역
  - [ ] STEP 01~06 모두 번역

- [ ] **CTA Section**
  - [ ] 제목, 부제목, 설명, 버튼 텍스트 번역

- [ ] **Target Companies Section**
  - [ ] 제목 및 설명 번역

- [ ] **FAQ Section (8개 항목)**
  - [ ] 모든 질문과 답변 번역
  - [ ] 아코디언 정상 동작

- [ ] **Contact Form**
  - [ ] 모든 레이블 번역 (이름, 이메일, 회사명, 전화번호, 메시지)
  - [ ] Placeholder 텍스트 번역
  - [ ] 성공/오류 메시지 번역
  - [ ] "서비스 소개서 받기" 버튼 번역

- [ ] **Footer**
  - [ ] 저작권 및 태그라인 번역

- [ ] **Floating Contact Button**
  - [ ] 버튼 텍스트 번역

## 🎨 UI/UX 테스트

### 반응형 디자인
- [ ] **Desktop (1920x1080)**
  - [ ] 모든 섹션 정상 표시
  - [ ] 언어 전환 버튼 정상 배치
  - [ ] 텍스트 오버플로우 없음

- [ ] **Tablet (iPad Mini 768x1024)**
  - [ ] 레이아웃 정상 조정
  - [ ] 언어 전환 버튼 접근 가능
  - [ ] Navigation 메뉴 정상

- [ ] **Mobile (iPhone SE 375x667)**
  - [ ] 모바일 메뉴 정상 동작
  - [ ] 언어 전환 버튼 표시
  - [ ] 모든 텍스트 가독성 확보
  - [ ] CTA 버튼 터치 영역 충분

### 다크모드
- [ ] **한국어 페이지**
  - [ ] 모든 섹션 다크모드 정상
  - [ ] 언어 전환 버튼 스타일

- [ ] **영문 페이지**
  - [ ] 모든 섹션 다크모드 정상
  - [ ] 언어 전환 버튼 스타일

### 애니메이션
- [ ] **Hero Section**
  - [ ] Shader Background 정상 동작
  - [ ] Animated Gradient Text 정상
  - [ ] Rolling Text 애니메이션 (한글/영문 모두)
  - [ ] CTA 버튼 애니메이션

- [ ] **Preview Cards**
  - [ ] Hover 효과 정상
  - [ ] Counting Number 애니메이션

- [ ] **기타 섹션**
  - [ ] FAQ 아코디언 애니메이션
  - [ ] Contact Form 상태 전환

## 🔍 SEO 검증

### 메타데이터
- [ ] **한국어 페이지 (/)**
  - [ ] `<title>` 태그: "FlowOS - AI 기반 데이터 운영 체제 구축 서비스"
  - [ ] `<meta name="description">` 한국어
  - [ ] `<meta property="og:locale" content="ko_KR">`
  - [ ] Canonical URL: `https://flowos.work`

- [ ] **영문 페이지 (/en)**
  - [ ] `<title>` 태그: "FlowOS - AI-Powered Business Operating System"
  - [ ] `<meta name="description">` 영문
  - [ ] `<meta property="og:locale" content="en_US">`
  - [ ] Canonical URL: `https://flowos.work/en`

### Hreflang 태그
- [ ] **한국어 페이지**
  - [ ] `<link rel="alternate" hreflang="ko" href="https://flowos.work">`
  - [ ] `<link rel="alternate" hreflang="en" href="https://flowos.work/en">`
  - [ ] `<link rel="alternate" hreflang="x-default" href="https://flowos.work">`

- [ ] **영문 페이지**
  - [ ] 동일한 hreflang 태그 존재

### Sitemap
- [ ] **Sitemap.xml 접근**
  - [ ] `https://flowos.work/sitemap.xml` 접근 가능
  - [ ] 한국어 페이지 항목 존재
  - [ ] 영문 페이지 항목 존재
  - [ ] `alternates.languages` 설정 확인

### Robots.txt
- [ ] **Robots.txt 접근**
  - [ ] `https://flowos.work/robots.txt` 접근 가능
  - [ ] Sitemap URL 포함
  - [ ] User-agent: * 설정
  - [ ] Allow: / 설정

### Structured Data
- [ ] **FAQ Schema**
  - [ ] 한국어 FAQ JSON-LD 존재
  - [ ] 영문 FAQ JSON-LD 존재
  - [ ] Google Rich Results Test 통과

## ⚡ 성능 테스트

### Lighthouse
- [ ] **한국어 페이지**
  - [ ] Performance: >90
  - [ ] Accessibility: >90
  - [ ] Best Practices: >90
  - [ ] SEO: >90

- [ ] **영문 페이지**
  - [ ] Performance: >90
  - [ ] Accessibility: >90
  - [ ] Best Practices: >90
  - [ ] SEO: >90

### 로딩 속도
- [ ] **초기 로드**
  - [ ] FCP (First Contentful Paint): <1.8s
  - [ ] LCP (Largest Contentful Paint): <2.5s
  - [ ] TTI (Time to Interactive): <3.8s

- [ ] **언어 전환**
  - [ ] 페이지 전환 시간: <500ms
  - [ ] 애니메이션 부드러움

## 🌐 브라우저 호환성

- [ ] **Chrome (최신 버전)**
  - [ ] 모든 기능 정상
  - [ ] 언어 전환 정상

- [ ] **Safari (최신 버전)**
  - [ ] 모든 기능 정상
  - [ ] 언어 전환 정상

- [ ] **Firefox (최신 버전)**
  - [ ] 모든 기능 정상
  - [ ] 언어 전환 정상

- [ ] **Edge (최신 버전)**
  - [ ] 모든 기능 정상
  - [ ] 언어 전환 정상

## 📱 모바일 테스트

### iOS
- [ ] **Safari iOS**
  - [ ] 모든 기능 정상
  - [ ] 터치 이벤트 정상
  - [ ] 언어 전환 정상

- [ ] **Chrome iOS**
  - [ ] 모든 기능 정상

### Android
- [ ] **Chrome Android**
  - [ ] 모든 기능 정상
  - [ ] 터치 이벤트 정상
  - [ ] 언어 전환 정상

## 🔐 보안 & 접근성

### 보안
- [ ] **HTTPS**
  - [ ] 모든 리소스 HTTPS 로드
  - [ ] Mixed Content 경고 없음

- [ ] **Content Security Policy**
  - [ ] CSP 헤더 설정 확인

### 접근성
- [ ] **키보드 네비게이션**
  - [ ] Tab 키로 모든 요소 접근 가능
  - [ ] 언어 전환 버튼 키보드 접근

- [ ] **스크린 리더**
  - [ ] 언어 전환 버튼 aria-label
  - [ ] 모든 이미지 alt 텍스트
  - [ ] 폼 필드 label 연결

- [ ] **색상 대비**
  - [ ] WCAG AA 기준 충족
  - [ ] 다크모드 대비 충족

## 📊 Analytics & Tracking

- [ ] **Google Analytics**
  - [ ] 한국어 페이지 추적
  - [ ] 영문 페이지 추적
  - [ ] 언어 전환 이벤트 추적

- [ ] **Contact Form**
  - [ ] 폼 제출 성공 추적
  - [ ] 언어별 전환율 측정

## ✅ 최종 체크리스트

- [ ] **코드 품질**
  - [ ] TypeScript 에러 없음
  - [ ] ESLint 경고 없음
  - [ ] 빌드 성공 (`npm run build`)

- [ ] **배포 준비**
  - [ ] 환경 변수 설정
  - [ ] Vercel 배포 설정
  - [ ] 도메인 설정

- [ ] **문서화**
  - [ ] README 업데이트
  - [ ] 배포 가이드 작성
  - [ ] 번역 업데이트 가이드

---

**테스트 완료일**: _____________

**테스터**: _____________

**발견된 이슈**: _____________

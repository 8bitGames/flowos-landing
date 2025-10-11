This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


📋 설정 체크리스트

  ✅ 완료된 작업

  - .env.local 파일 생성
  - API Route 코드 업데이트 (Google Sheets API 사용)

  🔧 사용자가 해야 할 작업

  1. Google Cloud Console 설정 (5분)
  - https://console.cloud.google.com 접속
  - 새 프로젝트 생성
  - API 및 서비스 → 라이브러리 → Google Sheets API 검색 → 사용 설정
  - 사용자 인증 정보 → 사용자 인증 정보 만들기 → API 키
  - API 키 복사

  2. Google Sheets 생성 (2분)
  - 새 Google Sheets 생성
  - 첫 행에 헤더 입력:
  이름 | 회사명 | 이메일 | 전화번호 | 웹사이트 | 메시지 | 접수시간
  - 공유 → 링크가 있는 모든 사용자 → 편집자 권한
  - URL에서 SHEET_ID 복사:
  https://docs.google.com/spreadsheets/d/[이 부분]/edit

  3. .env.local 파일 업데이트
  GOOGLE_SHEETS_API_KEY=여기에_API_키_붙여넣기
  GOOGLE_SHEET_ID=여기에_SHEET_ID_붙여넣기

  4. 개발 서버 재시작
  - 환경 변수를 읽으려면 서버를 재시작해야 합니다
  - 터미널에서 Ctrl+C → npm run dev

  5. 테스트
  - Contact 폼 작성 후 제출
  - Google Sheets에 데이터가 추가되는지 확인

  설정이 완료되면 알려주세요. 테스트를 도와드리겠습니다!
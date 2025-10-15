# FlowOS 다국어 페이지 배포 및 유지보수 가이드

## 🚀 배포 프로세스

### 1. Pre-Deployment 체크리스트

#### 코드 품질 확인
```bash
# TypeScript 타입 체크
npm run build

# Lint 검사
npm run lint

# 로컬 테스트
npm run dev
```

#### 테스트 완료 확인
- [ ] `claudedocs/multilingual-testing-checklist.md` 모든 항목 체크
- [ ] 한국어 페이지(/) 정상 동작
- [ ] 영문 페이지(/en) 정상 동작
- [ ] 언어 전환 정상 동작
- [ ] 모바일 반응형 확인

### 2. Vercel 배포

#### 자동 배포 (권장)
```bash
# Git commit & push
git add .
git commit -m "feat: Add multilingual support (Korean/English)"
git push origin main
```

Vercel이 자동으로 빌드 및 배포를 시작합니다.

#### 수동 배포
```bash
# Vercel CLI 설치 (처음만)
npm i -g vercel

# 배포
vercel --prod
```

### 3. 배포 후 검증

#### 필수 확인 사항
```bash
# Sitemap 확인
curl https://flowos.work/sitemap.xml

# Robots.txt 확인
curl https://flowos.work/robots.txt

# 한국어 페이지 접근
curl -I https://flowos.work

# 영문 페이지 접근
curl -I https://flowos.work/en
```

#### 브라우저 검증
1. https://flowos.work 접속
2. 언어 전환 버튼 클릭 → `/en`으로 이동 확인
3. 다시 언어 전환 → `/`로 돌아오는지 확인
4. 각 섹션 콘텐츠 번역 확인

### 4. SEO 도구 제출

#### Google Search Console
1. https://search.google.com/search-console 접속
2. **Sitemaps** 메뉴에서 sitemap.xml 제출
   ```
   https://flowos.work/sitemap.xml
   ```
3. **URL Inspection**으로 두 페이지 모두 검사
   - `https://flowos.work`
   - `https://flowos.work/en`

#### Bing Webmaster Tools
1. https://www.bing.com/webmasters 접속
2. Sitemap 제출
3. URL 제출

---

## 🔧 유지보수 가이드

### 번역 콘텐츠 수정

#### 한국어 콘텐츠 업데이트
```typescript
// src/locales/ko.ts 수정
export const ko: Translations = {
  nav: {
    feature: 'Feature',  // 수정할 부분
    // ...
  },
  // ...
};
```

#### 영문 콘텐츠 업데이트
```typescript
// src/locales/en.ts 수정
export const en: Translations = {
  nav: {
    feature: 'Features',  // 수정할 부분
    // ...
  },
  // ...
};
```

#### 변경 사항 배포
```bash
# 수정 후 저장
git add src/locales/
git commit -m "chore: Update translations"
git push origin main
```

### 새로운 섹션 추가

#### 1. 타입 정의 업데이트
```typescript
// src/locales/types.ts
export interface Translations {
  // 기존 섹션들...

  // 새로운 섹션 추가
  newSection: {
    title: string;
    description: string;
  };
}
```

#### 2. 한국어 번역 추가
```typescript
// src/locales/ko.ts
export const ko: Translations = {
  // ...
  newSection: {
    title: '새로운 섹션 제목',
    description: '새로운 섹션 설명',
  },
};
```

#### 3. 영문 번역 추가
```typescript
// src/locales/en.ts
export const en: Translations = {
  // ...
  newSection: {
    title: 'New Section Title',
    description: 'New section description',
  },
};
```

#### 4. 컴포넌트에서 사용
```typescript
// src/components/home-page.tsx
export function HomePage({ locale, translations: t }: HomePageProps) {
  return (
    // ...
    <section>
      <h2>{t.newSection.title}</h2>
      <p>{t.newSection.description}</p>
    </section>
    // ...
  );
}
```

### 새로운 언어 추가 (예: 일본어)

#### 1. Locale 타입 업데이트
```typescript
// src/locales/types.ts
export type Locale = 'ko' | 'en' | 'ja';  // 'ja' 추가
```

#### 2. 일본어 번역 파일 생성
```typescript
// src/locales/ja.ts
import { Translations } from './types';

export const ja: Translations = {
  nav: {
    feature: '機能',
    services: 'サービス',
    // ... 모든 섹션 번역
  },
  // ...
};
```

#### 3. index.ts 업데이트
```typescript
// src/locales/index.ts
import { ja } from './ja';

const translations: Record<Locale, Translations> = {
  ko,
  en,
  ja,  // 추가
};
```

#### 4. 라우트 생성
```bash
mkdir -p src/app/ja
```

```typescript
// src/app/ja/page.tsx
import { HomePage } from '@/components/home-page';
import { getTranslations } from '@/locales';

export default function JapanesHome() {
  const translations = getTranslations('ja');
  return <HomePage locale="ja" translations={translations} />;
}
```

#### 5. 메타데이터 추가
```typescript
// src/app/ja/layout.tsx
export const metadata: Metadata = {
  title: 'FlowOS - AIベースのビジネスオペレーティングシステム',
  // ...
  alternates: {
    canonical: 'https://flowos.work/ja',
    languages: {
      'ko': 'https://flowos.work',
      'en': 'https://flowos.work/en',
      'ja': 'https://flowos.work/ja',
    },
  },
};
```

#### 6. 언어 전환기 업데이트
```typescript
// src/components/ui/language-switcher.tsx
// 드롭다운 형태로 변경하거나 추가 버튼 생성
```

---

## 📊 성능 모니터링

### Lighthouse CI 설정

#### 1. GitHub Actions 워크플로우
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://flowos.work
            https://flowos.work/en
          uploadArtifacts: true
```

### Google Analytics 설정

#### 1. 언어별 페이지뷰 추적
```typescript
// src/app/layout.tsx 또는 별도 analytics 컴포넌트
'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Google Analytics 이벤트
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_language: pathname.startsWith('/en') ? 'en' : 'ko',
      });
    }
  }, [pathname]);

  return null;
}
```

#### 2. 언어 전환 이벤트 추적
```typescript
// src/components/ui/language-switcher.tsx
const handleLanguageSwitch = () => {
  // Analytics 이벤트
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'language_switch', {
      from: isEnglish ? 'en' : 'ko',
      to: isEnglish ? 'ko' : 'en',
    });
  }
};
```

---

## 🔍 문제 해결 (Troubleshooting)

### 언어 전환이 작동하지 않음

#### 증상
- 언어 전환 버튼 클릭 시 페이지가 변경되지 않음

#### 해결 방법
1. 브라우저 콘솔에서 에러 확인
2. `/en` 라우트가 존재하는지 확인
   ```bash
   ls -la src/app/en/
   ```
3. 개발 서버 재시작
   ```bash
   npm run dev
   ```

### 번역이 표시되지 않음

#### 증상
- 영문 페이지에서 한국어 텍스트가 표시됨

#### 해결 방법
1. `src/locales/en.ts` 파일 확인
2. 타입 에러 확인
   ```bash
   npm run build
   ```
3. 번역 키가 일치하는지 확인
   ```typescript
   // src/locales/ko.ts와 en.ts의 구조가 동일한지 확인
   ```

### SEO 메타태그가 적용되지 않음

#### 증상
- Google Search Console에서 hreflang 오류

#### 해결 방법
1. 페이지 소스 보기에서 `<head>` 태그 확인
2. `src/app/layout.tsx`의 `alternates` 설정 확인
3. Vercel 배포 후 캐시 클리어
   ```bash
   # 브라우저에서 Hard Refresh (Cmd+Shift+R 또는 Ctrl+Shift+R)
   ```

### 빌드 에러

#### 증상
```
Type error: Property 'xxx' does not exist on type 'Translations'
```

#### 해결 방법
1. `src/locales/types.ts`에 해당 속성 추가
2. `ko.ts`와 `en.ts` 모두 업데이트
3. 타입 체크
   ```bash
   npm run build
   ```

---

## 📝 버전 관리 가이드

### Git 커밋 컨벤션

```bash
# 번역 추가/수정
git commit -m "chore: Update Korean translations"
git commit -m "chore: Add English translation for new section"

# 새로운 언어 추가
git commit -m "feat: Add Japanese language support"

# 번역 시스템 개선
git commit -m "refactor: Improve translation type safety"

# 버그 수정
git commit -m "fix: Correct English translation in FAQ section"

# SEO 개선
git commit -m "seo: Update hreflang tags for better indexing"
```

### 브랜치 전략

```bash
# 새로운 언어 추가
git checkout -b feat/add-japanese-support

# 번역 업데이트
git checkout -b chore/update-translations

# 긴급 번역 수정
git checkout -b hotfix/fix-english-typo
```

---

## 🎯 성능 최적화 팁

### 1. 번역 파일 최적화
- 사용하지 않는 번역 키 제거
- 긴 텍스트는 별도 파일로 분리 고려

### 2. 이미지 최적화
- 언어별 이미지가 필요한 경우 WebP 포맷 사용
- Next.js Image 컴포넌트 활용

### 3. 번들 크기 최적화
```bash
# 번들 분석
npm run build
npx @next/bundle-analyzer
```

---

## 📞 지원 및 문의

### 기술 지원
- **이슈 보고**: GitHub Issues
- **긴급 문의**: anton@flowos.work

### 문서 업데이트
- 이 가이드는 프로젝트 변경사항에 따라 업데이트됩니다
- 마지막 업데이트: 2025-01-15

---

**다음 업데이트 예정**:
- [ ] 자동화된 번역 품질 검사 도구
- [ ] CI/CD 파이프라인 개선
- [ ] 다국어 CMS 연동 가이드

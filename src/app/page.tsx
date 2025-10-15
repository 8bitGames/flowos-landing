import { HomePage } from '@/components/home-page';
import { getTranslations } from '@/locales';

export default function Home() {
  const translations = getTranslations('ko');

  return <HomePage locale="ko" translations={translations} />;
}

import { HomePage } from '@/components/home-page';
import { getTranslations } from '@/locales';

export default function EnglishHome() {
  const translations = getTranslations('en');

  return <HomePage locale="en" translations={translations} />;
}

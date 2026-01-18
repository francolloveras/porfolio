import en from '@/i18n/en'
import es from '@/i18n/es'

export function getDictionary(locale: 'en' | 'es' = 'en') {
  const translations = { en, es }

  return translations[locale]
}

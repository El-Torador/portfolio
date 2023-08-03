import { defaultLocale } from '@/middleware';
import 'server-only'

interface Dictionary {
  [key: string]: () => Promise<Record<string, any>>;
}

const dictionaries: Dictionary = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  fr: () => import('../../dictionaries/fr.json').then((module) => module.default),
}

export const getDictionary = async (locale: keyof Dictionary) => dictionaries[locale ?? defaultLocale]()
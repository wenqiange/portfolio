import type { Dict, Locale } from './types';
import es from './es';
import ca from './ca';
import en from './en';
import zh from './zh';

export { locales, type Locale } from './types';

export const dicts: Record<Locale, Dict> = { es, ca, en, zh };

export const pathFor = (l: Locale) => (l === 'es' ? '/' : `/${l}/`);

// Fails the build when a locale's shape (keys, array lengths, value types) drifts from Spanish.
import es from '../src/i18n/es.ts';
import ca from '../src/i18n/ca.ts';
import en from '../src/i18n/en.ts';
import zh from '../src/i18n/zh.ts';

function shape(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(shape);
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.keys(v).sort().map((k) => [k, shape((v as Record<string, unknown>)[k])]));
  }
  if (typeof v === 'string' && v.trim() === '') return 'EMPTY';
  return typeof v;
}

// Stack lists, links and commands are data shared across locales; shapes still must match.
const ref = JSON.stringify(shape(es));
let failed = false;
for (const [name, dict] of Object.entries({ ca, en, zh })) {
  if (JSON.stringify(shape(dict)) !== ref) {
    console.error(`i18n: "${name}" does not match the shape of "es"`);
    failed = true;
  }
}
if (JSON.stringify(shape(es)).includes('EMPTY')) {
  console.error('i18n: "es" has empty strings');
  failed = true;
}
if (failed) process.exit(1);
console.log('i18n: es, ca, en, zh match');

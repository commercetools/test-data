import type { TLocalizedStringBuilder } from '../../types';
import LocalizedStringDraft from '../builder';

const empty = (): TLocalizedStringBuilder =>
  LocalizedStringDraft().en(undefined).de(undefined).fr(undefined);

export default empty;

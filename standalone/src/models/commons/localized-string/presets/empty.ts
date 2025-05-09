import LocalizedString from '../builder';
import type { TLocalizedStringBuilder } from '../types';

const empty = (): TLocalizedStringBuilder =>
  LocalizedString().en(undefined).de(undefined).fr(undefined);

export default empty;

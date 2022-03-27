import type { TLocalizedStringBuilder } from '../types';
import LocalizedString from '../builder';

const empty = (): TLocalizedStringBuilder =>
  LocalizedString().en(undefined).de(undefined).fr(undefined);

export default empty;

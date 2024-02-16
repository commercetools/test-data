import KeyReference from '../builder';
import type { TKeyReferenceBuilder } from '../types';

const stagedQuote = (): TKeyReferenceBuilder =>
  KeyReference().typeId('staged-quote');

export default stagedQuote;

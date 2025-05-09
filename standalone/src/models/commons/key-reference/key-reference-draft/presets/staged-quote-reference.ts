import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const stagedQuote = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('staged-quote');

export default stagedQuote;

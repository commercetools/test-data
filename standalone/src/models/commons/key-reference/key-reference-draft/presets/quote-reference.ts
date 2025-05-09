import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const quote = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('quote');

export default quote;

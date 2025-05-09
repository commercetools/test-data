import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const quoteRequest = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('quote-request');

export default quoteRequest;

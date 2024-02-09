import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const quoteRequestReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('quote-request');

export default quoteRequestReference;

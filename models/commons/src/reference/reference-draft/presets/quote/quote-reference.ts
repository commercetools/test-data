import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const quoteReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('quote');

export default quoteReference;

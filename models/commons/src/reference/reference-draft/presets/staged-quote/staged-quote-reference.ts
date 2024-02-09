import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const stagedQuoteReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('staged-quote');

export default stagedQuoteReference;

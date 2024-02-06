import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const reviewReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('review');

export default reviewReference;

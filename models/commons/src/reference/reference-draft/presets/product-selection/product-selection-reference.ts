import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const productSelectionReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('product-selection');

export default productSelectionReference;

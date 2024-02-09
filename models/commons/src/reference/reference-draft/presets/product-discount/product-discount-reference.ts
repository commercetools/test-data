import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const productDiscountReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('product-discount');

export default productDiscountReference;

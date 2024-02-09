import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const cartDiscountReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('cart-discount');

export default cartDiscountReference;

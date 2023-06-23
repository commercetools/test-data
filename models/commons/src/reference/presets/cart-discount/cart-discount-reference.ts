import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const cartDiscountReference = (): TReferenceBuilder =>
  Reference().typeId('cart-discount');

export default cartDiscountReference;

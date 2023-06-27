import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const productDiscountReference = (): TReferenceBuilder =>
  Reference().typeId('product-discount');

export default productDiscountReference;

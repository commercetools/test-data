import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const productPriceReference = (): TReferenceBuilder =>
  Reference().typeId('product-price');

export default productPriceReference;

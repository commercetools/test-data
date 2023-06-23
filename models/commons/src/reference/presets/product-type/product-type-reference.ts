import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const productTypeReference = (): TReferenceBuilder =>
  Reference().typeId('product-type');

export default productTypeReference;

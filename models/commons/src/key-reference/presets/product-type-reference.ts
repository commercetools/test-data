import KeyReference from '../builder';
import type { TKeyReferenceBuilder } from '../types';

const productType = (): TKeyReferenceBuilder =>
  KeyReference().typeId('product-type');

export default productType;

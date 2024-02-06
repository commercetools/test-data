import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReference from '../builder';

const productType = (): TKeyReferenceDraftBuilder =>
  KeyReference().typeId('product-type');

export default productType;

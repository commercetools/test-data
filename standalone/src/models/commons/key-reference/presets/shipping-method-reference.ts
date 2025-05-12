import KeyReference from '../builder';
import type { TKeyReferenceBuilder } from '../types';

const shippingMethod = (): TKeyReferenceBuilder =>
  KeyReference().typeId('shipping-method');

export default shippingMethod;

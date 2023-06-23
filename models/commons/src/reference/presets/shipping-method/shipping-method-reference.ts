import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const shippingMethodReference = (): TReferenceBuilder =>
  Reference().typeId('shipping-method');

export default shippingMethodReference;

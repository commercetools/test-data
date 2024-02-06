import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReference from '../builder';

const shippingMethod = (): TKeyReferenceDraftBuilder =>
  KeyReference().typeId('shipping-method');

export default shippingMethod;

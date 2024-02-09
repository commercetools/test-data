import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const shippingMethod = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('shipping-method');

export default shippingMethod;

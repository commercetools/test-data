import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const shippingMethodReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('shipping-method');

export default shippingMethodReference;

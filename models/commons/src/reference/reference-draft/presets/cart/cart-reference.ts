import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const cartReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('cart');

export default cartReference;

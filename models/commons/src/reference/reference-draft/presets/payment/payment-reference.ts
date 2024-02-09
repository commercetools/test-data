import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const paymentReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('payment');

export default paymentReference;

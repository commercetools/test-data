import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const orderReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('order');

export default orderReference;

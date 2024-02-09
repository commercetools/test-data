import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const customerGroupReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('customer-group');

export default customerGroupReference;

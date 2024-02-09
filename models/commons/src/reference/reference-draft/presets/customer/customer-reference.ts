import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const customerReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('customer');

export default customerReference;

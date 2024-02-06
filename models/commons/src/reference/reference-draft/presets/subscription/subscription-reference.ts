import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const subscriptionReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('subscription');

export default subscriptionReference;

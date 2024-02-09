import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const orderEditReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('order-edit');

export default orderEditReference;

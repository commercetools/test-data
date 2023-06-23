import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const orderEditReference = (): TReferenceBuilder =>
  Reference().typeId('order-edit');

export default orderEditReference;

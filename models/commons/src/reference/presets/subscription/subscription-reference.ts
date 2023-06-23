import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const subscriptionReference = (): TReferenceBuilder =>
  Reference().typeId('subscription');

export default subscriptionReference;

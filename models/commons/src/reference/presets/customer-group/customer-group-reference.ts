import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const customerGroupReference = (): TReferenceBuilder =>
  Reference().typeId('customer-group');

export default customerGroupReference;

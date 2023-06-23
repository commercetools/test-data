import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const customerReference = (): TReferenceBuilder =>
  Reference().typeId('customer');

export default customerReference;

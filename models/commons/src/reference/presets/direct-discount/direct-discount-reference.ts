import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const directDiscountReference = (): TReferenceBuilder =>
  Reference().typeId('direct-discount');

export default directDiscountReference;

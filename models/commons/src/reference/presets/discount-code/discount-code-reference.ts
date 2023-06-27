import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const discountCodeReference = (): TReferenceBuilder =>
  Reference().typeId('discount-code');

export default discountCodeReference;

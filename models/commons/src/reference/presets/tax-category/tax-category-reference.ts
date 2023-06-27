import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const taxCategoryReference = (): TReferenceBuilder =>
  Reference().typeId('tax-category');

export default taxCategoryReference;

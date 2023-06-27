import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const productSelectionReference = (): TReferenceBuilder =>
  Reference().typeId('product-selection');

export default productSelectionReference;

import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const productReference = (): TReferenceBuilder => Reference().typeId('product');

export default productReference;

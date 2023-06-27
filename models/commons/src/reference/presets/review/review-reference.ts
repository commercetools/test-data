import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const reviewReference = (): TReferenceBuilder => Reference().typeId('review');

export default reviewReference;

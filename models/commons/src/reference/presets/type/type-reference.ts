import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const typeReference = (): TReferenceBuilder => Reference().typeId('type');

export default typeReference;

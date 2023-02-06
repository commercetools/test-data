import Reference from '../builder';
import type { TReferenceBuilder } from '../types';

const category = (): TReferenceBuilder => Reference().typeId('category');

export default category;

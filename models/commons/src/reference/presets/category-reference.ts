import type { TReferenceBuilder } from '../types';

import Reference from '../builder';
const category = (): TReferenceBuilder => Reference().typeId('category');
export default category;

import Reference from '../builder';
import type { TReferenceBuilder } from '../types';

const empty = (): TReferenceBuilder => Reference().id(undefined).key(undefined);

export default empty;

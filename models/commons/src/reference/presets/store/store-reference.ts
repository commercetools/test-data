import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const storeReference = (): TReferenceBuilder => Reference().typeId('store');

export default storeReference;

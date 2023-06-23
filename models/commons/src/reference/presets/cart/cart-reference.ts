import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const cartReference = (): TReferenceBuilder => Reference().typeId('cart');

export default cartReference;

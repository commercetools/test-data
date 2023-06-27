import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const orderReference = (): TReferenceBuilder => Reference().typeId('order');

export default orderReference;

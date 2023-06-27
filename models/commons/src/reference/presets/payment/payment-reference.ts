import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const paymentReference = (): TReferenceBuilder => Reference().typeId('payment');

export default paymentReference;

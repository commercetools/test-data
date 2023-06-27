import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const quoteReference = (): TReferenceBuilder => Reference().typeId('quote');

export default quoteReference;

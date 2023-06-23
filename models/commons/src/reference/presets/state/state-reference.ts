import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const stateReference = (): TReferenceBuilder => Reference().typeId('state');

export default stateReference;

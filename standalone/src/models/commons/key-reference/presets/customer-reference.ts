import KeyReference from '../builder';
import type { TKeyReferenceBuilder } from '../types';

const customer = (): TKeyReferenceBuilder => KeyReference().typeId('customer');

export default customer;

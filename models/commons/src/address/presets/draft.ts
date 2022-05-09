import type { TAddressBuilder } from '../types';
import Address from '../builder';

const draft = (): TAddressBuilder => Address().id(undefined);

export default draft;

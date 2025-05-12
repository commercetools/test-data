import KeyReference from '../builder';
import type { TKeyReferenceBuilder } from '../types';

const storeReference = (): TKeyReferenceBuilder =>
  KeyReference().typeId('store');

export default storeReference;

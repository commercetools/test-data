import KeyReference from '../builder';
import type { TKeyReferenceBuilder } from '../types';

const customerGroup = (): TKeyReferenceBuilder =>
  KeyReference().typeId('customer-group');

export default customerGroup;

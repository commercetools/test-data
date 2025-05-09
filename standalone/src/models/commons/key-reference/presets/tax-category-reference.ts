import KeyReference from '../builder';
import type { TKeyReferenceBuilder } from '../types';

const taxCategory = (): TKeyReferenceBuilder =>
  KeyReference().typeId('tax-category');

export default taxCategory;

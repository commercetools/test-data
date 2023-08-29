import KeyReference from '../builder';
import type { TKeyReferenceBuilder } from '../types';

const businessUnit = (): TKeyReferenceBuilder =>
  KeyReference().typeId('business-unit');

export default businessUnit;

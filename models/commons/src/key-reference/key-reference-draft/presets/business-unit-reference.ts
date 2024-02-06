import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReference from '../builder';

const businessUnit = (): TKeyReferenceDraftBuilder =>
  KeyReference().typeId('business-unit');

export default businessUnit;

import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const businessUnitReference = (): TReferenceBuilder =>
  Reference().typeId('business-unit');

export default businessUnitReference;

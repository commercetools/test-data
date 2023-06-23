import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const zoneReference = (): TReferenceBuilder => Reference().typeId('zone');

export default zoneReference;

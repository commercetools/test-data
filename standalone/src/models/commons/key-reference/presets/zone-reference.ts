import KeyReference from '../builder';
import type { TKeyReferenceBuilder } from '../types';

const zoneReference = (): TKeyReferenceBuilder => KeyReference().typeId('zone');

export default zoneReference;

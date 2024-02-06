import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReference from '../builder';

const zoneReference = (): TKeyReferenceDraftBuilder =>
  KeyReference().typeId('zone');

export default zoneReference;

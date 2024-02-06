import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReference from '../builder';

const associateRole = (): TKeyReferenceDraftBuilder =>
  KeyReference().typeId('associate-role');

export default associateRole;

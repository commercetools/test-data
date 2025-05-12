import KeyReference from '../builder';
import type { TKeyReferenceBuilder } from '../types';

const associateRole = (): TKeyReferenceBuilder =>
  KeyReference().typeId('associate-role');

export default associateRole;

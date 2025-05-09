import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const associateRole = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('associate-role');

export default associateRole;

import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const zoneReference = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('zone');

export default zoneReference;

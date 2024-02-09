import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const zoneReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('zone');

export default zoneReference;

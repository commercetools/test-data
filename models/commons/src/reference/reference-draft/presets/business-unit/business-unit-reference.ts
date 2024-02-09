import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const businessUnitReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('business-unit');

export default businessUnitReference;

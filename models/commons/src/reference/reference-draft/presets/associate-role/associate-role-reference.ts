import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const associateRoleReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('associate-role');

export default associateRoleReference;

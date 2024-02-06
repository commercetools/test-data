import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const typeReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('type');

export default typeReference;

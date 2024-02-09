import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const categoryReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('category');

export default categoryReference;

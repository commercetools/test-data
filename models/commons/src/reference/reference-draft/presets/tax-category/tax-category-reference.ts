import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const taxCategoryReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('tax-category');

export default taxCategoryReference;

import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const productReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('product');

export default productReference;

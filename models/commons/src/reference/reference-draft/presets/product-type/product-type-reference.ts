import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const productTypeReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('product-type');

export default productTypeReference;

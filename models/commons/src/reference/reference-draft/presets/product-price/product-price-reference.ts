import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const productPriceReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('product-price');

export default productPriceReference;

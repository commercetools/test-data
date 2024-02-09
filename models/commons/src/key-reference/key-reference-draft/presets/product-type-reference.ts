import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const productType = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('product-type');

export default productType;

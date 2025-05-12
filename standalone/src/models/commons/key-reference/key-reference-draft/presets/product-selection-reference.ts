import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const productSelection = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('product-selection');

export default productSelection;

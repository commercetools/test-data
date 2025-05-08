import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const taxCategory = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('tax-category');

export default taxCategory;

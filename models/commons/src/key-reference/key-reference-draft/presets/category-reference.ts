import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const category = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('category');

export default category;

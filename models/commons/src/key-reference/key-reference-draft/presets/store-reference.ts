import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const storeReference = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('store');

export default storeReference;

import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const cart = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('cart');

export default cart;

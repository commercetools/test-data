import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const customer = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('customer');

export default customer;

import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const customerGroup = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('customer-group');

export default customerGroup;

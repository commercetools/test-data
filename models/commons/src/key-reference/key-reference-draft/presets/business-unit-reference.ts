import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const businessUnit = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('business-unit');

export default businessUnit;

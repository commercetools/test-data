import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReferenceDraft from '../builder';

const channel = (): TKeyReferenceDraftBuilder =>
  KeyReferenceDraft().typeId('channel');

export default channel;

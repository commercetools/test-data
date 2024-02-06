import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReference from '../builder';

const channel = (): TKeyReferenceDraftBuilder =>
  KeyReference().typeId('channel');

export default channel;

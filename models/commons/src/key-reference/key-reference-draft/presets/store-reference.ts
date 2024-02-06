import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReference from '../builder';

const storeReference = (): TKeyReferenceDraftBuilder =>
  KeyReference().typeId('store');

export default storeReference;

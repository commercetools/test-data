import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReference from '../builder';

const customer = (): TKeyReferenceDraftBuilder =>
  KeyReference().typeId('customer');

export default customer;

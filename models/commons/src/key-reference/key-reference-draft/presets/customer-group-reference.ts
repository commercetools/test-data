import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReference from '../builder';

const customerGroup = (): TKeyReferenceDraftBuilder =>
  KeyReference().typeId('customer-group');

export default customerGroup;

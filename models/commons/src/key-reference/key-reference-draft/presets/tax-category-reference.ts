import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReference from '../builder';

const taxCategory = (): TKeyReferenceDraftBuilder =>
  KeyReference().typeId('tax-category');

export default taxCategory;

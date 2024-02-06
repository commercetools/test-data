import type { TKeyReferenceDraftBuilder } from '../../types';
import KeyReference from '../builder';

const category = (): TKeyReferenceDraftBuilder =>
  KeyReference().typeId('category');

export default category;

import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const directDiscountReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('direct-discount');

export default directDiscountReference;

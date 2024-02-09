import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const discountCodeReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('discount-code');

export default discountCodeReference;

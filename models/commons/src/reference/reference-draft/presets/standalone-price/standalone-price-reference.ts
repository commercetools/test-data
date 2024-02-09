import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const standalonePriceReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('standalone-price');

export default standalonePriceReference;

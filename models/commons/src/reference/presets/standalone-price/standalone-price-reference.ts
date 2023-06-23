import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const standalonePriceReference = (): TReferenceBuilder =>
  Reference().typeId('standalone-price');

export default standalonePriceReference;

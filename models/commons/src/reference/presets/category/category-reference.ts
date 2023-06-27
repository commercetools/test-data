import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const categoryReference = (): TReferenceBuilder =>
  Reference().typeId('category');

export default categoryReference;

import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const attributeGroupReference = (): TReferenceBuilder =>
  Reference().typeId('attribute-group');

export default attributeGroupReference;

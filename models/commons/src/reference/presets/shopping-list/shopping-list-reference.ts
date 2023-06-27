import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const shoppingListReference = (): TReferenceBuilder =>
  Reference().typeId('shopping-list');

export default shoppingListReference;

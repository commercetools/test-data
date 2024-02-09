import type { TReferenceDraftBuilder } from '../../../types';
import ReferenceDraft from '../../builder';

const shoppingListReference = (): TReferenceDraftBuilder =>
  ReferenceDraft().typeId('shopping-list');

export default shoppingListReference;

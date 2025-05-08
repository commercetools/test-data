import type { TCartDiscountMultiBuyLineItemsTargetDraftBuilder } from '../../types';
import CartDiscountMultiBuyLineItemsTargetDraft from '../builder';

const empty = (): TCartDiscountMultiBuyLineItemsTargetDraftBuilder =>
  CartDiscountMultiBuyLineItemsTargetDraft().maxOccurrence(undefined);

export default empty;

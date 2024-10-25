import type { TCartDiscountMultiBuyCustomLineItemsTargetDraftBuilder } from '../../types';
import CartDiscountMultiBuyCustomLineItemsTargetDraft from '../builder';

const empty = (): TCartDiscountMultiBuyCustomLineItemsTargetDraftBuilder =>
  CartDiscountMultiBuyCustomLineItemsTargetDraft().maxOccurrence(undefined);

export default empty;

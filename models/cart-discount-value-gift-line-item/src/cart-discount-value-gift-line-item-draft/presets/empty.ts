import type { TCartDiscountValueGiftLineItemDraftBuilder } from '../../types';
import CartDiscountValueGiftLineItemBuilder from '../builder';

const empty = (): TCartDiscountValueGiftLineItemDraftBuilder =>
  CartDiscountValueGiftLineItemBuilder()
    .distributionChannel(undefined)
    .supplyChannel(undefined);

export default empty;

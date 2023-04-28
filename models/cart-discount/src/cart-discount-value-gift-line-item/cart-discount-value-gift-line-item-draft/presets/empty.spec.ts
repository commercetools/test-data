import type { TCartDiscountValueGiftLineItemDraft } from '../../types';
import empty from './empty';

it('should set all specified fields to undefined', () => {
  const emptyCartDiscountDraft =
    empty().build<TCartDiscountValueGiftLineItemDraft>();
  expect(emptyCartDiscountDraft).toMatchObject({
    distributionChannel: undefined,
    supplyChannel: undefined,
  });
});

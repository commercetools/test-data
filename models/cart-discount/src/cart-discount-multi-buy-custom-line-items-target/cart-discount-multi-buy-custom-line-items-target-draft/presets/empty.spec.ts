import type { TCartDiscountMultiBuyCustomLineItemsTargetDraft } from '../../types';
import empty from './empty';

it('should set all specified fields to undefined', () => {
  const emptyDraft =
    empty().build<TCartDiscountMultiBuyCustomLineItemsTargetDraft>();
  expect(emptyDraft).toMatchObject({
    maxOccurrence: undefined,
  });
});

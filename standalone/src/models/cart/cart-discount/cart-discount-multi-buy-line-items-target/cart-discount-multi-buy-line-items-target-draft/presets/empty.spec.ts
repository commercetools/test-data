import type { TCartDiscountMultiBuyLineItemsTargetDraft } from '../../types';
import empty from './empty';

it('should set all specified fields to undefined', () => {
  const emptyDraft = empty().build<TCartDiscountMultiBuyLineItemsTargetDraft>();
  expect(emptyDraft).toMatchObject({
    maxOccurrence: undefined,
  });
});

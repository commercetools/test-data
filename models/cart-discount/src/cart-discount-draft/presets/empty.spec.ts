import type { TCartDiscountDraft } from '../../types';
import empty from './empty';

it('should set all specified fields to undefined', () => {
  const emptyCartDiscountDraft = empty().build<TCartDiscountDraft>();
  expect(emptyCartDiscountDraft).toMatchObject({
    key: undefined,
    description: undefined,
    target: undefined,
    isActive: undefined,
    validFrom: undefined,
    validUntil: undefined,
    requiresDiscountCode: undefined,
    stackingMode: undefined,
    custom: undefined,
  });
});

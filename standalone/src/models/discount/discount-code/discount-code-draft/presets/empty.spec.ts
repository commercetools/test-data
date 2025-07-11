import type { TDiscountCodeDraft } from '../../types';
import empty from './empty';

it('should set all fields except `code` and `cartDiscounts` to undefined', () => {
  const emptyDiscountCodeDraft = empty().build<TDiscountCodeDraft>();
  expect(emptyDiscountCodeDraft).toEqual({
    cartDiscounts: expect.any(Array),
    code: expect.any(String),
    cartPredicate: undefined,
    description: undefined,
    groups: undefined,
    isActive: undefined,
    maxApplications: undefined,
    maxApplicationsPerCustomer: undefined,
    name: undefined,
    validFrom: undefined,
    validUntil: undefined,
  });
});

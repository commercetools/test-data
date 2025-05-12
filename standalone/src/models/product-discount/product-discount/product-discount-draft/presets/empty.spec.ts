import type { TProductDiscountDraft } from '../../types';
import empty from './empty';

it('should set appropriate fields to `undefined`', () => {
  const productDiscountDraft = empty().build<TProductDiscountDraft>();

  expect(productDiscountDraft).toMatchObject({
    key: undefined,
    description: undefined,
    validFrom: undefined,
    validUntil: undefined,
  });
});

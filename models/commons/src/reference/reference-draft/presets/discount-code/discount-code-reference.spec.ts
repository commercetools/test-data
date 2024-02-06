import type { TReferenceDraft } from '../../../types';
import discountCodeReference from './discount-code-reference';

it('should build a discount-code reference', () => {
  const built =
    discountCodeReference().build<TReferenceDraft<'discount-code'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'discount-code',
  });
});

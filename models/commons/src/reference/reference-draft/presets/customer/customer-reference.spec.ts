import type { TReferenceDraft } from '../../../types';
import customerReference from './customer-reference';

it('should build a customer reference', () => {
  const built = customerReference().build<TReferenceDraft<'customer'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'customer',
  });
});

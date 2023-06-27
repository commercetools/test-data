import type { TReference } from '../../types';
import customerReference from './customer-reference';

it('should build a customer reference', () => {
  const built = customerReference().build<TReference<'customer'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'customer',
  });
});

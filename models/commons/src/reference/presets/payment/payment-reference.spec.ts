import type { TReference } from '../../types';
import paymentReference from './payment-reference';

it('should build a payment reference', () => {
  const built = paymentReference().build<TReference<'payment'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'payment',
  });
});

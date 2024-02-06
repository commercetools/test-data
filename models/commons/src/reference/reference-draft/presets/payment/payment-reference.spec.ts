import type { TReferenceDraft } from '../../../types';
import paymentReference from './payment-reference';

it('should build a payment reference', () => {
  const built = paymentReference().build<TReferenceDraft<'payment'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'payment',
  });
});

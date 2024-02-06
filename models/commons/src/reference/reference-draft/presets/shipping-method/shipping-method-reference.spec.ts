import type { TReferenceDraft } from '../../../types';
import shippingMethodReference from './shipping-method-reference';

it('should build a shipping-method reference', () => {
  const built =
    shippingMethodReference().build<TReferenceDraft<'shipping-method'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'shipping-method',
  });
});

import type { TKeyReferenceDraft } from '../../types';
import shippingMethodReference from './shipping-method-reference';

it('should build shipping method reference', () => {
  const built = shippingMethodReference().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'shipping-method',
  });
});

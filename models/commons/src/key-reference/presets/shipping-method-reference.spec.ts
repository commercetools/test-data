import type { TKeyReference } from '../types';
import shippingMethodReference from './shipping-method-reference';

it('should build category reference', () => {
  const built = shippingMethodReference().build<TKeyReference>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'shipping-method',
  });
});

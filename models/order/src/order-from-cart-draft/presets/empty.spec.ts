import type { TOrderFromCartDraft } from '../../types';
import empty from './empty';

it(`should set the specified fields to undefined`, () => {
  const emptyOrderFromCartDraft = empty().build<TOrderFromCartDraft>();
  expect(emptyOrderFromCartDraft).toEqual({
    cart: undefined,
    version: expect.any(Number),
    orderNumber: undefined,
    purchaseOrderNumber: undefined,
    paymentState: undefined,
    orderState: undefined,
    state: undefined,
    shipmentState: undefined,
    custom: undefined,
  });
});

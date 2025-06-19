import type { TOrderFromQuoteDraft } from '../../types';
import empty from './empty';

it(`should set the specified fields to undefined`, () => {
  const emptyOrderFromCartDraft = empty().build<TOrderFromQuoteDraft>();
  expect(emptyOrderFromCartDraft).toEqual({
    quote: expect.objectContaining({
      typeId: 'quote',
    }),
    version: expect.any(Number),
    quoteStateToAccepted: undefined,
    orderNumber: undefined,
    paymentState: undefined,
    shipmentState: undefined,
    orderState: undefined,
    state: undefined,
  });
});

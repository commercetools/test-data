import { emptyRestPreset, emptyGraphqlPreset } from './empty';

describe('empty preset', () => {
  it(`should set the specified fields to undefined - rest`, () => {
    const emptyOrderFromCartDraftRest = emptyRestPreset().build();
    expect(emptyOrderFromCartDraftRest).toEqual({
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

  it(`should set the specified fields to undefined - graphql`, () => {
    const emptyOrderFromCartDraftGraphql = emptyGraphqlPreset().build();
    expect(emptyOrderFromCartDraftGraphql).toEqual({
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
});

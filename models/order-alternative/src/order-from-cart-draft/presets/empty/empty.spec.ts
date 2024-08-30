import { restPreset, graphqlPreset } from './empty';

describe('empty preset', () => {
  it(`should set the specified fields to undefined - rest`, () => {
    const emptyOrderFromCartDraftRest = restPreset().build();
    expect(emptyOrderFromCartDraftRest).toEqual({
      id: null,
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
    const emptyOrderFromCartDraftGraphql = graphqlPreset().build();
    expect(emptyOrderFromCartDraftGraphql).toEqual({
      id: null,
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

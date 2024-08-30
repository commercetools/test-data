import { restPreset, graphqlPreset } from './empty';

describe('empty preset', () => {
  it(`should set the specified fields to undefined - rest`, () => {
    const emptyOrderFromCartDraft = restPreset().build();
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

  it(`should set the specified fields to undefined - graphql`, () => {
    const emptyOrderFromCartDraft = graphqlPreset().build();
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
});

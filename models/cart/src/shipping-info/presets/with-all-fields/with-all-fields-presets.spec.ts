import * as withAllPresets from './with-all-fields-presets';

describe('with all fields', () => {
  it(`should create the expected object preset - rest`, () => {
    const restExamplePreset = withAllPresets.restPreset().build();
    console.log('restExamplePreset', restExamplePreset);
    expect(restExamplePreset).toEqual(
      expect.objectContaining({
        deliveries: expect.any(Array),
        price: expect.objectContaining({
          currencyCode: 'EUR',
        }),
        shipingMethod: expect.objectContaining({
          typeId: 'shipping-method',
        }),
        shippingMethodName: 'shipping-method-name',
        shippingRate: expect.objectContaining({
          price: expect.objectContaining({
            currencyCode: 'EUR',
          }),
        }),
        taxCategory: expect.objectContaining({
          typeId: 'tax-category',
        }),
        taxRate: expect.objectContaining({
          name: expect.any(String),
        }),
      })
    );
  });

  it(`should create the expected object preset - graphql`, () => {
    const graphqlExamplePreset = withAllPresets.graphqlPreset().build();
    expect(graphqlExamplePreset).toEqual(
      expect.objectContaining({
        deliveries: expect.any(Array),
        price: expect.objectContaining({
          __typename: 'Money',
        }),
        shipingMethod: expect.objectContaining({
          __typename: 'ShippingMethod',
        }),
        shippingMethodName: 'shipping-method-name',
        shippingRate: expect.objectContaining({
          __typename: 'ShippingRate',
        }),
        taxCategory: expect.objectContaining({
          typeId: 'tax-category',
        }),
        taxRate: expect.objectContaining({
          __typename: 'TaxRate',
        }),
      })
    );
  });
});

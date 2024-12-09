import * as withAllPresets from './with-all-fields-presets';

describe('with all fields', () => {
  it(`should create the expected object preset - rest`, () => {
    const restExamplePreset = withAllPresets.restPreset().build();

    expect(restExamplePreset).toEqual(
      expect.objectContaining({
        deliveries: expect.any(Array),
        price: expect.objectContaining({
          currencyCode: 'EUR',
        }),
        shippingMethod: expect.objectContaining({
          typeId: 'shipping-method',
        }),
        shippingMethodName: 'shipping-method-name',
        shippingRate: expect.objectContaining({
          price: expect.objectContaining({
            currencyCode: expect.any(String),
          }),
        }),
        taxCategory: expect.objectContaining({
          typeId: 'tax-category',
        }),
        taxRate: expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          amount: expect.any(Number),
        }),
        taxedPrice: expect.objectContaining({
          totalNet: expect.objectContaining({
            currencyCode: 'EUR',
          }),
          totalGross: expect.objectContaining({
            currencyCode: 'EUR',
          }),
          totalTax: expect.objectContaining({
            currencyCode: 'EUR',
          }),
          taxPortions: expect.any(Array),
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
          currencyCode: 'EUR',
          __typename: 'Money',
        }),
        shippingMethod: expect.objectContaining({
          __typename: 'ShippingMethod',
        }),
        shippingMethodRef: expect.objectContaining({
          typeId: 'shipping-method',
          __typename: 'Reference',
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
        __typename: 'ShippingInfo',
      })
    );
  });
});

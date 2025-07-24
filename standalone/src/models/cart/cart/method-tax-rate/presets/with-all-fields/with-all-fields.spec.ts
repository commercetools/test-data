import * as examplePresets from './with-all-fields';

describe('example preset', () => {
  it(`should create the expected object preset - rest`, () => {
    const restExamplePreset = examplePresets.restPreset().build();

    expect(restExamplePreset).toEqual(
      expect.objectContaining({
        shippingMethodKey: expect.any(String),
        taxRate: expect.objectContaining({
          country: expect.any(String),
          includedInPrice: expect.any(Boolean),
        }),
      })
    );
  });

  it(`should create the expected object preset - graphql`, () => {
    const graphqlExamplePreset = examplePresets.graphqlPreset().build();

    expect(graphqlExamplePreset).toEqual(
      expect.objectContaining({
        shippingMethodKey: expect.any(String),
        taxRate: expect.objectContaining({
          __typename: 'TaxRate',
        }),
      })
    );
  });
});

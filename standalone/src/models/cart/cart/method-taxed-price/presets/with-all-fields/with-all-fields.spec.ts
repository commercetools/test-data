import * as withAllFieldsPresets from './with-all-fields';

describe('MethodTaxedPrice "withAllFields" preset', () => {
  it('should build properties for the REST preset', () => {
    const restModel = withAllFieldsPresets.restPreset().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        shippingMethodKey: expect.any(String),
        taxedPrice: expect.objectContaining({
          totalGross: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
          totalNet: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
        }),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = withAllFieldsPresets.graphqlPreset().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        shippingMethodKey: expect.any(String),
        taxedPrice: expect.objectContaining({
          __typename: 'TaxedItemPrice',
        }),
        __typename: 'MethodTaxedPrice',
      })
    );
  });
});

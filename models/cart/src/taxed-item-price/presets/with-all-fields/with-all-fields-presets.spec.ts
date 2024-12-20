import * as withAllPresets from './with-all-fields-presets';

describe('with all fields', () => {
  it(`should create the expected object preset - rest`, () => {
    const restExamplePreset = withAllPresets.restPreset().build();

    expect(restExamplePreset).toEqual(
      expect.objectContaining({
        totalNet: expect.objectContaining({
          currencyCode: 'EUR',
        }),
        totalGross: expect.objectContaining({
          currencyCode: 'EUR',
        }),
        totalTax: expect.objectContaining({
          currencyCode: 'EUR',
        }),
        taxPortions: [
          expect.objectContaining({
            name: null,
            rate: expect.any(Number),
            amount: expect.objectContaining({
              currencyCode: expect.any(String),
              centAmount: expect.any(Number),
            }),
          }),
        ],
      })
    );
  });

  it(`should create the expected object preset - graphql`, () => {
    const graphqlExamplePreset = withAllPresets.graphqlPreset().build();
    expect(graphqlExamplePreset).toEqual(
      expect.objectContaining({
        totalNet: expect.objectContaining({
          __typename: 'Money',
        }),
        totalGross: expect.objectContaining({
          __typename: 'Money',
        }),
        totalTax: expect.objectContaining({
          __typename: 'Money',
        }),
        taxPortions: [
          expect.objectContaining({
            __typename: 'TaxPortion',
          }),
        ],
      })
    );
  });
});

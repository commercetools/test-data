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
              currencyCode: 'EUR',
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
          currencyCode: 'EUR',
          __typename: 'Money',
        }),
        totalGross: expect.objectContaining({
          currencyCode: 'EUR',
          __typename: 'Money',
        }),
        totalTax: expect.objectContaining({
          currencyCode: 'EUR',
          __typename: 'Money',
        }),
        taxPortions: [
          expect.objectContaining({
            amount: expect.objectContaining({
              currencyCode: 'EUR',
              __typename: 'Money',
            }),
            __typename: 'TaxPortion',
          }),
        ],
      })
    );
  });
});

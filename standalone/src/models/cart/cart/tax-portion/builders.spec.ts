import { TaxPortionRest, TaxPortionGraphql } from './index';

describe('TaxPortion Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = TaxPortionRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        name: null,
        rate: expect.any(Number),
        amount: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = TaxPortionGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        name: null,
        rate: expect.any(Number),
        amount: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
          __typename: 'Money',
        }),
        __typename: 'TaxPortion',
      })
    );
  });
});

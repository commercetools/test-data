import { TaxPortionDraftRest, TaxPortionDraftGraphql } from './index';

describe('TaxPortion Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = TaxPortionDraftRest.random().build();

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
    const graphqlModel = TaxPortionDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
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
});

import { BaseMoneyDraftGraphql } from './index';

describe('BaseMoneyDraft Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = BaseMoneyDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        centPrecision: null,
        highPrecision: null,
      })
    );
  });
});

import { DiscountGroupDraftRest, DiscountGroupDraftGraphql } from './index';

describe('DiscountGroupDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DiscountGroupDraftRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        sortOrder: expect.any(String),
        name: null,
        description: null,
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DiscountGroupDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        sortOrder: expect.any(String),
        name: null,
        description: null,
      })
    );
  });
});

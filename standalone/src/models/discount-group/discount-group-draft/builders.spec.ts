import { DiscountGroupDraftRest, DiscountGroupDraftGraphql } from './index';

describe('DiscountGroupDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DiscountGroupDraftRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        sortOrder: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
        }),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DiscountGroupDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        sortOrder: expect.any(String),
        name: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        description: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
      })
    );
  });
});

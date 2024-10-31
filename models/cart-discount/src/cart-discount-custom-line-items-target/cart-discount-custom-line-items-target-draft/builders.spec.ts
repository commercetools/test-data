import {
  CartDiscountCustomLineItemsTargetDraftGraphql,
  CartDiscountCustomLineItemsTargetDraftRest,
} from './';

describe('CartDiscountCustomLineItemsTargetDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel =
      CartDiscountCustomLineItemsTargetDraftRest.random().build();

    expect(restModel).toStrictEqual({
      type: 'customLineItems',
      predicate: expect.any(String),
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CartDiscountCustomLineItemsTargetDraftGraphql.random().build();

    expect(graphqlModel).toStrictEqual({
      customLineItems: { predicate: expect.any(String) },
    });
  });
});

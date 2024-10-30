import {
  CartDiscountCustomLineItemsTargetDraft,
  CartDiscountCustomLineItemsTargetDraftGraphql,
  CartDiscountCustomLineItemsTargetDraftRest,
} from './index';

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

describe('CartDiscountCustomLineItemsTargetDraft model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel =
      CartDiscountCustomLineItemsTargetDraft.random().buildRest();

    expect(restModel).toStrictEqual({
      type: 'customLineItems',
      predicate: expect.any(String),
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CartDiscountCustomLineItemsTargetDraft.random().buildGraphql();

    expect(graphqlModel).toStrictEqual({
      customLineItems: { predicate: expect.any(String) },
    });
  });
});

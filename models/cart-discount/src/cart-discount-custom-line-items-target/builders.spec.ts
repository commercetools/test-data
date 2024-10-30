import {
  CartDiscountCustomLineItemsTarget,
  CartDiscountCustomLineItemsTargetGraphql,
  CartDiscountCustomLineItemsTargetRest,
} from './';

describe('CartDiscountCustomLineItemsTarget model builders', () => {
  it('builds a REST model', () => {
    const restModel = CartDiscountCustomLineItemsTargetRest.random().build();

    expect(restModel).toStrictEqual({
      type: 'customLineItems',
      predicate: expect.any(String),
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CartDiscountCustomLineItemsTargetGraphql.random().build();

    expect(graphqlModel).toStrictEqual({
      type: 'customLineItems',
      predicate: expect.any(String),
      __typename: 'CustomLineItemsTarget',
    });
  });
});

describe('CartDiscountCustomLineItemsTarget model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = CartDiscountCustomLineItemsTarget.random().buildRest();

    expect(restModel).toStrictEqual({
      type: 'customLineItems',
      predicate: expect.any(String),
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CartDiscountCustomLineItemsTarget.random().buildGraphql();

    expect(graphqlModel).toStrictEqual({
      type: 'customLineItems',
      predicate: expect.any(String),
      __typename: 'CustomLineItemsTarget',
    });
  });
});

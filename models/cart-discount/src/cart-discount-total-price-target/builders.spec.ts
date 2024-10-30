import {
  CartDiscountTotalPriceTarget,
  CartDiscountTotalPriceTargetGraphql,
  CartDiscountTotalPriceTargetRest,
} from './';

describe('CartDiscountTotalPriceTarget model builders', () => {
  it('builds a REST model', () => {
    const restModel = CartDiscountTotalPriceTargetRest.random().build();

    expect(restModel).toStrictEqual({
      type: 'totalPrice',
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartDiscountTotalPriceTargetGraphql.random().build();

    expect(graphqlModel).toStrictEqual({
      type: 'totalPrice',
      __typename: 'CartDiscountTotalPriceTarget',
    });
  });
});

describe('CartDiscountTotalPriceTarget model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = CartDiscountTotalPriceTarget.random().buildRest();

    expect(restModel).toStrictEqual({
      type: 'totalPrice',
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartDiscountTotalPriceTarget.random().buildGraphql();

    expect(graphqlModel).toStrictEqual({
      type: 'totalPrice',
      __typename: 'CartDiscountTotalPriceTarget',
    });
  });
});

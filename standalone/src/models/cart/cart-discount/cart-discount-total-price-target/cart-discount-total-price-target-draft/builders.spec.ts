import {
  CartDiscountTotalPriceTargetDraftGraphql,
  CartDiscountTotalPriceTargetDraftRest,
} from './';

describe('CartDiscountTotalPriceTargetDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = CartDiscountTotalPriceTargetDraftRest.random().build();

    expect(restModel).toStrictEqual({
      type: 'totalPrice',
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CartDiscountTotalPriceTargetDraftGraphql.random().build();

    expect(graphqlModel).toStrictEqual({
      totalPrice: {},
    });
  });
});

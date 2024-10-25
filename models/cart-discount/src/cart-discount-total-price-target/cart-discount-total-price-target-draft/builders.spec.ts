import {
  CartDiscountTotalPriceTargetDraft,
  CartDiscountTotalPriceTargetDraftGraphql,
  CartDiscountTotalPriceTargetDraftRest,
} from './index';

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

describe('CartDiscountTotalPriceTargetDraft model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = CartDiscountTotalPriceTargetDraft.random().buildRest();

    expect(restModel).toStrictEqual({
      type: 'totalPrice',
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CartDiscountTotalPriceTargetDraft.random().buildGraphql();

    expect(graphqlModel).toStrictEqual({
      totalPrice: {},
    });
  });
});

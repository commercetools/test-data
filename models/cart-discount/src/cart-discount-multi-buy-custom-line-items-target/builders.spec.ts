import { selectionMode } from './constants';
import {
  CartDiscountMultiBuyCustomLineItemsTarget,
  CartDiscountMultiBuyCustomLineItemsTargetGraphql,
  CartDiscountMultiBuyCustomLineItemsTargetRest,
} from './';

describe('CartDiscountMultiBuyCustomLineItemsTarget model builders', () => {
  it('builds a REST model', () => {
    const restModel =
      CartDiscountMultiBuyCustomLineItemsTargetRest.random().build();

    expect(restModel).toStrictEqual({
      type: 'multiBuyCustomLineItems',
      discountedQuantity: expect.any(Number),
      maxOccurrence: expect.any(Number),
      predicate: expect.any(String),
      selectionMode: expect.toBeOneOf(Object.values(selectionMode)),
      triggerQuantity: expect.any(Number),
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CartDiscountMultiBuyCustomLineItemsTargetGraphql.random().build();

    expect(graphqlModel).toStrictEqual({
      type: 'multiBuyCustomLineItems',
      discountedQuantity: expect.any(Number),
      maxOccurrence: expect.any(Number),
      predicate: expect.any(String),
      selectionMode: expect.toBeOneOf(Object.values(selectionMode)),
      triggerQuantity: expect.any(Number),
      __typename: 'CartDiscountMultiBuyCustomLineItemsTarget',
    });
  });
});

describe('CartDiscountMultiBuyCustomLineItemsTarget model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel =
      CartDiscountMultiBuyCustomLineItemsTarget.random().buildRest();

    expect(restModel).toStrictEqual({
      type: 'multiBuyCustomLineItems',
      discountedQuantity: expect.any(Number),
      maxOccurrence: expect.any(Number),
      predicate: expect.any(String),
      selectionMode: expect.toBeOneOf(Object.values(selectionMode)),
      triggerQuantity: expect.any(Number),
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CartDiscountMultiBuyCustomLineItemsTarget.random().buildGraphql();

    expect(graphqlModel).toStrictEqual({
      type: 'multiBuyCustomLineItems',
      discountedQuantity: expect.any(Number),
      maxOccurrence: expect.any(Number),
      predicate: expect.any(String),
      selectionMode: expect.toBeOneOf(Object.values(selectionMode)),
      triggerQuantity: expect.any(Number),
      __typename: 'CartDiscountMultiBuyCustomLineItemsTarget',
    });
  });
});

import { selectionMode } from '../constants';
import {
  CartDiscountMultiBuyCustomLineItemsTargetDraft,
  CartDiscountMultiBuyCustomLineItemsTargetDraftGraphql,
  CartDiscountMultiBuyCustomLineItemsTargetDraftRest,
} from './';

describe('CartDiscountMultiBuyCustomLineItemsTargetDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel =
      CartDiscountMultiBuyCustomLineItemsTargetDraftRest.random().build();

    expect(restModel).toStrictEqual({
      type: 'multiBuyCustomLineItems',
      predicate: expect.any(String),
      triggerQuantity: expect.any(Number),
      discountedQuantity: expect.any(Number),
      maxOccurrence: expect.any(Number),
      selectionMode: expect.toBeOneOf(Object.values(selectionMode)),
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CartDiscountMultiBuyCustomLineItemsTargetDraftGraphql.random().build();

    expect(graphqlModel).toStrictEqual({
      multiBuyCustomLineItems: {
        predicate: expect.any(String),
        triggerQuantity: expect.any(Number),
        discountedQuantity: expect.any(Number),
        maxOccurrence: expect.any(Number),
        selectionMode: expect.toBeOneOf(Object.values(selectionMode)),
      },
    });
  });
});

describe('CartDiscountMultiBuyCustomLineItemsTargetDraft model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel =
      CartDiscountMultiBuyCustomLineItemsTargetDraft.random().buildRest();

    expect(restModel).toStrictEqual({
      type: 'multiBuyCustomLineItems',
      predicate: expect.any(String),
      triggerQuantity: expect.any(Number),
      discountedQuantity: expect.any(Number),
      maxOccurrence: expect.any(Number),
      selectionMode: expect.toBeOneOf(Object.values(selectionMode)),
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      CartDiscountMultiBuyCustomLineItemsTargetDraft.random().buildGraphql();

    expect(graphqlModel).toStrictEqual({
      multiBuyCustomLineItems: {
        predicate: expect.any(String),
        triggerQuantity: expect.any(Number),
        discountedQuantity: expect.any(Number),
        maxOccurrence: expect.any(Number),
        selectionMode: expect.toBeOneOf(Object.values(selectionMode)),
      },
    });
  });
});

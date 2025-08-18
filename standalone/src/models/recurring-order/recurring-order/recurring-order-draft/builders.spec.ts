import { recurringOrderState } from '../constants';
import { RecurringOrderDraftGraphql, RecurringOrderDraftRest } from './index';

describe('RecurringOrderDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = RecurringOrderDraftRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        key: null,
        cartVersion: expect.any(Number),
        startsAt: expect.any(String),
        state: null,
        custom: null,
        cart: expect.objectContaining({
          id: expect.any(String),
          typeId: 'cart',
        }),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = RecurringOrderDraftGraphql.random()
      .recurringOrderState(recurringOrderState.Active)
      .build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        key: null,
        cartVersion: expect.any(Number),
        startsAt: expect.any(String),
        state: null,
        custom: null,
        cart: expect.objectContaining({
          id: expect.any(String),
          typeId: 'cart',
        }),
        recurringOrderState: expect.any(String),
        expiresAt: null,
      })
    );
  });
});

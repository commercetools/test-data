import { TCtpRecurringOrderState } from '@/graphql-types';
import { RecurringOrderDraftGraphql } from './index';

describe('RecurringOrderDraft Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = RecurringOrderDraftGraphql.random()
      .recurringOrderState(TCtpRecurringOrderState.Active)
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

import {
  LineItemRecurrenceInfoDraftRest,
  LineItemRecurrenceInfoDraftGraphql,
} from './index';

describe('LineItemRecurrenceInfoDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = LineItemRecurrenceInfoDraftRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        recurrencePolicy: expect.objectContaining({
          id: expect.any(String),
          typeId: 'recurrence-policy',
        }),
        priceSelectionMode: expect.any(String),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = LineItemRecurrenceInfoDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        priceSelectionMode: expect.any(String),
        expiresAt: expect.any(String),
        recurrencePolicyRef: expect.objectContaining({
          id: expect.any(String),
        }),
        __typename: 'LineItemRecurrenceInfoDraft',
      })
    );
  });
});

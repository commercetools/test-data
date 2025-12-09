import {
  LineItemRecurrenceInfoRest,
  LineItemRecurrenceInfoGraphql,
} from './index';

describe('LineItemRecurrenceInfo Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = LineItemRecurrenceInfoRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        recurrencePolicy: expect.objectContaining({
          id: expect.any(String),
          typeId: 'recurrence-policy',
          obj: expect.any(Object),
        }),
        priceSelectionMode: expect.any(String),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = LineItemRecurrenceInfoGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        recurrencePolicy: expect.objectContaining({
          id: expect.any(String),
          __typename: 'RecurrencePolicy',
        }),
        priceSelectionMode: expect.any(String),
        expiresAt: expect.any(String),
        recurrencePolicyRef: expect.objectContaining({
          __typename: 'Reference',
        }),
        __typename: 'LineItemRecurrenceInfo',
      })
    );
  });
});

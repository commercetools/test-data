import {
  CustomLineItemRecurrenceInfoRest,
  CustomLineItemRecurrenceInfoGraphql,
} from './index';

describe('CustomLineItemRecurrenceInfo Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = CustomLineItemRecurrenceInfoRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        recurrencePolicy: expect.objectContaining({
          id: expect.any(String),
          typeId: 'recurrence-policy',
          obj: expect.any(Object),
        }),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = CustomLineItemRecurrenceInfoGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        recurrencePolicy: expect.objectContaining({
          id: expect.any(String),
          __typename: 'RecurrencePolicy',
        }),
        expiresAt: expect.any(String),
        recurrencePolicyRef: expect.objectContaining({
          typeId: 'recurrence-policy',
          __typename: 'Reference',
        }),
        __typename: 'CustomLineItemRecurrenceInfo',
      })
    );
  });
});

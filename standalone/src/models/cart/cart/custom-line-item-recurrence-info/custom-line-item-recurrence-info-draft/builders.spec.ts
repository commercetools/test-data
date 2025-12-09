import {
  CustomLineItemRecurrenceInfoDraftRest,
  CustomLineItemRecurrenceInfoDraftGraphql,
} from './index';

describe('CustomLineItemRecurrenceInfoDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = CustomLineItemRecurrenceInfoDraftRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        recurrencePolicy: expect.objectContaining({
          id: expect.any(String),
          typeId: 'recurrence-policy',
        }),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel =
      CustomLineItemRecurrenceInfoDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        expiresAt: expect.any(String),
        recurrencePolicyRef: expect.objectContaining({
          id: expect.any(String),
        }),
        __typename: 'CustomLineItemRecurrenceInfoDraft',
      })
    );
  });
});

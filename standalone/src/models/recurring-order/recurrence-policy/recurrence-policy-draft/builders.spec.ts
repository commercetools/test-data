import { LocalizedString } from '@/models/commons';
import { StandardScheduleGraphql } from '../../index';
import { RecurrencePolicyDraftGraphql } from './index';

describe('RecurrencePolicyDraft Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = RecurrencePolicyDraftGraphql.random()
      .name(LocalizedString.random())
      .description(LocalizedString.random())
      .schedule(StandardScheduleGraphql.random())
      .buildGraphql();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        name: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        description: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        schedule: expect.objectContaining({
          type: 'Standard',
          value: expect.any(Number),
          intervalUnit: expect.any(String),
          __typename: 'StandardSchedule',
        }),
      })
    );
  });
});

import { LocalizedString } from '@/models/commons';
import {
  StandardScheduleDraftRest,
  RecurrencePolicyScheduleInputGraphql,
  StandardScheduleInputGraphql,
} from '../../index';
import { intervalUnit } from '../../standard-schedule/constants';
import {
  RecurrencePolicyDraftGraphql,
  RecurrencePolicyDraftRest,
} from './index';

describe('RecurrencePolicyDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = RecurrencePolicyDraftRest.random()
      .name(LocalizedString.random())
      .description(LocalizedString.random())
      .schedule(StandardScheduleDraftRest.random())
      .build();

    expect(restModel).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        schedule: expect.objectContaining({
          type: 'standard',
          value: expect.any(Number),
          intervalUnit: expect.toBeOneOf(Object.values(intervalUnit)),
        }),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = RecurrencePolicyDraftGraphql.random()
      .name(LocalizedString.random())
      .description(LocalizedString.random())
      .schedule(
        RecurrencePolicyScheduleInputGraphql.random().standard(
          StandardScheduleInputGraphql.random()
        )
      )
      .build();

    console.log(graphqlModel);

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
          standard: expect.objectContaining({
            value: expect.any(Number),
            intervalUnit: expect.toBeOneOf(Object.values(intervalUnit)),
          }),
        }),
      })
    );
  });
});

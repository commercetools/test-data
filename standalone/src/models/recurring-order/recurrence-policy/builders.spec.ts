import { LocalizedString } from '@/models/commons';
import { StandardScheduleGraphql, StandardScheduleRest } from '../index';
import { intervalUnit } from '../standard-schedule/constants';
import { RecurrencePolicyGraphql, RecurrencePolicyRest } from './index';

describe('RecurrencePolicy Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = RecurrencePolicyRest.random()
      .name(LocalizedString.random())
      .description(LocalizedString.random())
      .schedule(StandardScheduleRest.random())
      .build();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
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
          intervalUnit: expect.any(String),
        }),
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = RecurrencePolicyGraphql.random()
      .nameAllLocales(LocalizedString.random())
      .descriptionAllLocales(LocalizedString.random())
      .schedule(StandardScheduleGraphql.random())
      .build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        schedule: expect.objectContaining({
          value: expect.any(Number),
          intervalUnit: expect.toBeOneOf(Object.values(intervalUnit)),
          __typename: 'StandardSchedule',
        }),
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
        __typename: 'RecurrencePolicy',
      })
    );
  });
});

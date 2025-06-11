import { LocalizedString } from '@/models/commons';
import { RecurrencePolicyGraphql } from './index';

describe('RecurrencePolicy Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = RecurrencePolicyGraphql.random()
      .nameAllLocales(LocalizedString.random())
      .descriptionAllLocales(LocalizedString.random())
      .buildGraphql();

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
        schedule: null,
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
        __typename: 'RecurrencePolicy',
      })
    );
  });
});

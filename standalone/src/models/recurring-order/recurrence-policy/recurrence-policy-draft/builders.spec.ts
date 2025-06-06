import { LocalizedString } from '@/models/commons';
import { RecurrencePolicyDraftGraphql } from './index';

describe('RecurrencePolicyDraft Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = RecurrencePolicyDraftGraphql.random()
      .name(LocalizedString.random())
      .description(LocalizedString.random())
      .build();

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
        schedule: null,
      })
    );
  });
});

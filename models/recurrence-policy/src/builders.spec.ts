import { LocalizedString } from '@commercetools-test-data/commons';
import {
  RecurrencePolicyRest,
  RecurrencePolicyGraphql,
  type TRecurrencePolicyRest,
  TRecurrencePolicyGraphql,
} from './index';

const validateCommonFields = (
  model: TRecurrencePolicyRest | TRecurrencePolicyGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      schedule: null,
      createdAt: expect.any(String),
      createdBy: null,
      lastModifiedAt: expect.any(String),
      lastModifiedBy: null,
    })
  );
};
describe('RecurrencePolicy Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = RecurrencePolicyRest.random()
      .name(LocalizedString.random())
      .description(LocalizedString.random())
      .build();

    validateCommonFields(restModel);
    expect(restModel).toEqual(
      expect.objectContaining({
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = RecurrencePolicyGraphql.random()
      .nameAllLocales(LocalizedString.random())
      .descriptionAllLocales(LocalizedString.random())
      .build();

    validateCommonFields(graphqlModel);

    console.log(graphqlModel);

    expect(graphqlModel).toEqual(
      expect.objectContaining({
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
        name: expect.any(String),
        description: expect.any(String),
        __typename: 'RecurrencePolicy',
      })
    );
  });
});

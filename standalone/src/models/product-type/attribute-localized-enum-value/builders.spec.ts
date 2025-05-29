import type {
  TAttributeLocalizedEnumValueGraphql,
  TAttributeLocalizedEnumValueRest,
} from './types';
import {
  AttributeLocalizedEnumValue,
  AttributeLocalizedEnumValueGraphql,
  AttributeLocalizedEnumValueRest,
} from './index';

function validateRestModel(model: TAttributeLocalizedEnumValueRest) {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      label: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
      }),
    })
  );
}

function validateGraphqlModel(model: TAttributeLocalizedEnumValueGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      labelAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
          __typename: 'LocalizedString',
        }),
      ]),
      __typename: 'LocalizedEnumValue',
    })
  );
}

describe('AttributePlainEnumValue model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeLocalizedEnumValueRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeLocalizedEnumValueGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributePlainEnumValue model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeLocalizedEnumValue.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeLocalizedEnumValue.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeLocalizedEnumValue.random().buildGraphql<TAttributeLocalizedEnumValueGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});

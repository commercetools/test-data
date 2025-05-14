import type {
  TAttributeLocalizedEnumTypeGraphql,
  TAttributeLocalizedEnumTypeRest,
} from './types';
import {
  AttributeLocalizedEnumType,
  AttributeLocalizedEnumTypeGraphql,
  AttributeLocalizedEnumTypeRest,
} from './index';

function validateRestModel(model: TAttributeLocalizedEnumTypeRest) {
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      values: expect.arrayContaining([
        expect.objectContaining({
          key: expect.any(String),
          label: expect.objectContaining({
            en: expect.any(String),
            de: expect.any(String),
          }),
        }),
      ]),
    })
  );
}

function validateGraphqlModel(model: TAttributeLocalizedEnumTypeGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      values: expect.arrayContaining([
        expect.objectContaining({
          key: expect.any(String),
          label: expect.any(String),
          labelAllLocales: expect.arrayContaining([
            expect.objectContaining({
              __typename: 'LocalizedString',
            }),
          ]),
        }),
      ]),
      __typename: 'LocalizableEnumAttributeDefinitionType',
    })
  );
}

describe('AttributeLocalizedEnumType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeLocalizedEnumTypeRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeLocalizedEnumTypeGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeLocalizedEnumType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeLocalizedEnumType.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeLocalizedEnumType.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeLocalizedEnumType.random().buildGraphql<TAttributeLocalizedEnumTypeGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});

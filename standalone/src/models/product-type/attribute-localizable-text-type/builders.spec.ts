import type {
  TAttributeLocalizableTextTypeGraphql,
  TAttributeLocalizableTextTypeRest,
} from './types';
import {
  AttributeLocalizableTextType,
  AttributeLocalizableTextTypeGraphql,
  AttributeLocalizableTextTypeRest,
} from './index';

function validateModel(
  model:
    | TAttributeLocalizableTextTypeRest
    | TAttributeLocalizableTextTypeGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'ltext',
    })
  );
}

describe('AttributeLocalizableTextType model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeLocalizableTextTypeRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeLocalizableTextTypeGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual(
      'LocalizableTextAttributeDefinitionType'
    );
  });
});

describe('AttributeLocalizableTextType model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeLocalizableTextType.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeLocalizableTextType.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeLocalizableTextType.random().buildGraphql<TAttributeLocalizableTextTypeGraphql>();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual(
      'LocalizableTextAttributeDefinitionType'
    );
  });
});

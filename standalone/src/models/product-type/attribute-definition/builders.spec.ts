import * as constants from './constants';
import { TAttributeDefinitionGraphql, TAttributeDefinitionRest } from './types';
import {
  AttributeDefinition,
  AttributeDefinitionGraphql,
  AttributeDefinitionRest,
} from './index';

const validateRestModel = (model: TAttributeDefinitionRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      attributeConstraint: expect.stringFromArray(
        Object.values(constants.attributeConstraints)
      ),
      name: expect.any(String),
      inputHint: expect.stringFromArray(Object.values(constants.inputHints)),
      isRequired: expect.any(Boolean),
      isSearchable: expect.any(Boolean),
      type: expect.objectContaining({
        name: expect.any(String),
      }),
      label: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
        fr: expect.any(String),
      }),
      inputTip: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
        fr: expect.any(String),
      }),
    })
  );
};

const validateGraphqlModel = (model: TAttributeDefinitionGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      attributeConstraint: expect.stringFromArray(
        Object.values(constants.attributeConstraints)
      ),
      name: expect.any(String),
      inputHint: expect.stringFromArray(Object.values(constants.inputHints)),
      isRequired: expect.any(Boolean),
      isSearchable: expect.any(Boolean),
      inputTip: expect.any(String),
      inputTipAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
        }),
      ]),
      label: expect.any(String),
      labelAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
        }),
      ]),
      type: expect.objectContaining({
        __typename: expect.stringFromArray([
          'BooleanAttributeDefinitionType',
          'TextAttributeDefinitionType',
          'EnumAttributeDefinitionType',
        ]),
      }),
      __typename: 'AttributeDefinition',
    })
  );
};

describe('AttributeDefinition model builders', () => {
  it('builds a REST model', () => {
    const restModel = AttributeDefinitionRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = AttributeDefinitionGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeDefinition model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = AttributeDefinition.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = AttributeDefinition.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      AttributeDefinition.random().buildGraphql<TAttributeDefinitionGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});

import * as constants from '../constants';
import {
  TAttributeDefinitionGraphql,
  TAttributeDefinitionRest,
} from '../types';
import * as presets from './country-of-origin-attribute-definition';

const validateRestModel = (model: TAttributeDefinitionRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      attributeConstraint: constants.attributeConstraints.None,
      name: 'country-of-origin',
      isRequired: true,
      label: expect.objectContaining({
        en: `Country of Origin`,
      }),
      type: expect.objectContaining({
        name: 'text',
      }),
    })
  );
};

const validateGraphqlModel = (model: TAttributeDefinitionGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      attributeConstraint: constants.attributeConstraints.None,
      name: 'country-of-origin',
      isRequired: true,
      label: `Country of Origin`,
      labelAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: `Country of Origin`,
        }),
      ]),
      type: expect.objectContaining({
        __typename: 'TextAttributeDefinitionType',
      }),
      __typename: 'AttributeDefinition',
    })
  );
};

describe('AttributeDefinition country-of-origin preset model builders', () => {
  it('builds a REST model', () => {
    const restModel = presets.restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = presets.graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeDefinition country-of-origin preset model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = presets.compatPreset().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = presets.compatPreset().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = presets
      .compatPreset()
      .buildGraphql<TAttributeDefinitionGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});

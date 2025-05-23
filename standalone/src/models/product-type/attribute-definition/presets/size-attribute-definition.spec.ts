import * as constants from '../constants';
import {
  TAttributeDefinitionGraphql,
  TAttributeDefinitionRest,
} from '../types';
import * as presets from './size-attribute-definition';

const validateRestModel = (model: TAttributeDefinitionRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      attributeConstraint: constants.attributeConstraints.None,
      name: 'size',
      inputHint: constants.inputHints.SingleLine,
      isRequired: true,
      isSearchable: true,
      type: expect.objectContaining({
        name: 'enum',
      }),
      label: expect.objectContaining({
        en: 'Size',
      }),
      inputTip: expect.objectContaining({
        en: 'Size of a product',
      }),
    })
  );
};

const validateGraphqlModel = (model: TAttributeDefinitionGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      attributeConstraint: constants.attributeConstraints.None,
      name: 'size',
      inputHint: constants.inputHints.SingleLine,
      isRequired: true,
      isSearchable: true,
      inputTip: 'Size of a product',
      inputTipAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'Size of a product',
        }),
      ]),
      label: 'Size',
      labelAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'Size',
        }),
      ]),
      type: expect.objectContaining({
        __typename: 'EnumAttributeDefinitionType',
      }),
      __typename: 'AttributeDefinition',
    })
  );
};

describe('AttributeDefinition size preset model builders', () => {
  it('builds a REST model', () => {
    const restModel = presets.restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = presets.graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeDefinition size preset model compatibility builders', () => {
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

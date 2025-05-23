import {
  TAttributeDefinitionGraphql,
  TAttributeDefinitionRest,
} from '../types';
import * as presets from './number-attribute-definition';

const validateRestModel = (model: TAttributeDefinitionRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'Number Attribute Definition',
      inputTip: expect.objectContaining({
        en: `Number Attribute Definition's Input Tip`,
      }),
      label: expect.objectContaining({
        en: `Number Attribute Definition's Label`,
      }),
      type: expect.objectContaining({
        name: 'number',
      }),
    })
  );
};

const validateGraphqlModel = (model: TAttributeDefinitionGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: 'Number Attribute Definition',
      inputTip: `Number Attribute Definition's Input Tip`,
      inputTipAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: `Number Attribute Definition's Input Tip`,
        }),
      ]),
      label: `Number Attribute Definition's Label`,
      labelAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: `Number Attribute Definition's Label`,
        }),
      ]),
      type: expect.objectContaining({
        __typename: 'NumberAttributeDefinitionType',
      }),
      __typename: 'AttributeDefinition',
    })
  );
};

describe('AttributeDefinition number preset model builders', () => {
  it('builds a REST model', () => {
    const restModel = presets.restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = presets.graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('AttributeDefinition number preset model compatibility builders', () => {
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

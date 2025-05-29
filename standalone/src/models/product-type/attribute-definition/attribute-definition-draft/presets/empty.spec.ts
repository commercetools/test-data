import {
  TAttributeDefinitionDraftGraphql,
  TAttributeDefinitionDraftRest,
} from '../../types';
import * as presets from './empty';

const validateModel = (
  model: TAttributeDefinitionDraftRest | TAttributeDefinitionDraftGraphql
): void => {
  expect(model).toEqual(
    expect.objectContaining({
      attributeConstraint: undefined,
      inputHint: undefined,
      isSearchable: false,
      inputTip: undefined,
    })
  );
};

describe('AttributeDefinitionDraft model empty presets builders', () => {
  it('builds a REST model', () => {
    const restModel = presets.restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = presets.graphqlPreset().build();

    validateModel(graphqlModel);
  });
});

describe('AttributeDefinitionDraft model empty presets compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = presets.compatPreset().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = presets.compatPreset().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = presets
      .compatPreset()
      .buildGraphql<TAttributeDefinitionDraftGraphql>();

    validateModel(graphqlModel);
  });
});

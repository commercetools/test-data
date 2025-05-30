import {
  TProductTypeDraftGraphql,
  TProductTypeDraftRest,
} from '../../../types';
import * as presets from './with-no-attributes';

const validateRestModel = (model: TProductTypeDraftRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      name: expect.any(String),
      description: expect.any(String),
      attributes: undefined,
    })
  );
};

const validateGraphqlModel = (model: TProductTypeDraftGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      name: expect.any(String),
      description: expect.any(String),
      attributeDefinitions: undefined,
    })
  );
};

describe('ProductType model builders', () => {
  it('builds a REST model', () => {
    const restModel = presets.restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = presets.graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ProductType model compatibility builders', () => {
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
      .buildGraphql<TProductTypeDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});

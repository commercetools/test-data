import type { TImage, TImageGraphql, TImageRest } from '../types';
import * as commercetoolsPosAemPresets from './commercetools-pos-aem';

const validateModel = (model: TImageGraphql | TImageRest) => {
  expect(model).toMatchObject({
    url: 'https://bit.ly/3lCCAiE',
    label: 'commercetools sits between POS and AEM',
  });
};

const validateRestModel = (model: TImageRest) => {
  validateModel(model);
  expect(model.dimensions).toEqual(
    expect.objectContaining({
      w: 800,
      h: 450,
    })
  );
};

const validateGraphqlModel = (model: TImageGraphql) => {
  validateModel(model);
  expect(model.dimensions).toEqual(
    expect.objectContaining({
      width: 800,
      height: 450,
      __typename: 'Dimensions',
    })
  );
};

describe('commercetools POS AEM preset builders', () => {
  it('builds a REST model', () => {
    const restModel = commercetoolsPosAemPresets.restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = commercetoolsPosAemPresets.graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('commercetools POS AEM preset compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = commercetoolsPosAemPresets.compatPreset().build<TImage>();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = commercetoolsPosAemPresets
      .compatPreset()
      .buildRest<TImageRest>();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = commercetoolsPosAemPresets
      .compatPreset()
      .buildGraphql<TImageGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});

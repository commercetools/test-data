import type { TImage, TImageGraphql, TImageRest } from '../types';
import * as commercetoolsApiPlatformPresets from './commercetools-api-platform';

const validateModel = (model: TImageGraphql | TImageRest) => {
  expect(model).toMatchObject({
    url: 'https://bit.ly/36XHFNP',
    label: 'commercetools API platform',
  });
};

const validateRestModel = (model: TImageRest) => {
  validateModel(model);
  expect(model.dimensions).toEqual(
    expect.objectContaining({
      w: 1094,
      h: 740,
    })
  );
};

const validateGraphqlModel = (model: TImageGraphql) => {
  validateModel(model);
  expect(model.dimensions).toEqual(
    expect.objectContaining({
      width: 1094,
      height: 740,
      __typename: 'Dimensions',
    })
  );
};

describe('commercetools API platform preset builders', () => {
  it('builds a REST model', () => {
    const restModel = commercetoolsApiPlatformPresets.restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = commercetoolsApiPlatformPresets
      .graphqlPreset()
      .build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('commercetools API platform preset compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = commercetoolsApiPlatformPresets
      .compatPreset()
      .build<TImage>();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = commercetoolsApiPlatformPresets
      .compatPreset()
      .buildRest<TImageRest>();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = commercetoolsApiPlatformPresets
      .compatPreset()
      .buildGraphql<TImageGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});

import { TImage, TImageGraphql, TImageRest } from './types';
import { Image, ImageGraphql, ImageRest } from './index';

const validateModel = (model: TImageGraphql | TImageRest) => {
  expect(model).toMatchObject({
    label: expect.any(String),
    url: expect.any(String),
  });
};

const validateRestModel = (model: TImageRest | TImage) => {
  validateModel(model);
  expect(model.dimensions).toEqual(
    expect.objectContaining({
      w: expect.any(Number),
      h: expect.any(Number),
    })
  );
};

const validateGraphqlModel = (model: TImageGraphql) => {
  validateModel(model);
  expect(model.dimensions).toEqual(
    expect.objectContaining({
      __typename: 'Dimensions',
    })
  );
  expect(model.__typename).toEqual('Image');
};

describe('Image model builders', () => {
  it('builds a REST model', () => {
    const restModel = ImageRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ImageGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Image model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = Image.random().build<TImage>();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = Image.random().buildRest<TImageRest>();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = Image.random().buildGraphql<TImageGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});

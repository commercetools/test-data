import { TImageDraft, TImageDraftGraphql, TImageDraftRest } from '../types';
import { ImageDraft, ImageDraftGraphql, ImageDraftRest } from './index';

const validateModel = (model: TImageDraftGraphql | TImageDraftRest) => {
  expect(model).toMatchObject({
    label: expect.any(String),
    url: expect.any(String),
  });
};

const validateRestModel = (model: TImageDraftRest) => {
  validateModel(model);
  expect(model.dimensions).toEqual(
    expect.objectContaining({
      w: expect.any(Number),
      h: expect.any(Number),
    })
  );
};

const validateGraphqlModel = (model: TImageDraftGraphql) => {
  validateModel(model);
  expect(model.dimensions).toEqual(
    expect.objectContaining({
      width: expect.any(Number),
      height: expect.any(Number),
    })
  );
};

describe('ImageDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = ImageDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ImageDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ImageDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = ImageDraft.random().build<TImageDraft>();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = ImageDraft.random().buildRest<TImageDraftRest>();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ImageDraft.random().buildGraphql<TImageDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});

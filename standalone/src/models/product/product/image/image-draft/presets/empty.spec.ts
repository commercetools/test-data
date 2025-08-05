import type {
  TImageDraft,
  TImageDraftGraphql,
  TImageDraftRest,
} from '../../types';
import * as emptyPresets from './empty';

const validateModel = (model: TImageDraftGraphql | TImageDraftRest) => {
  expect(model).toMatchObject({
    url: expect.any(String),
    label: undefined,
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

describe('Image "empty" preset builders', () => {
  it('builds a REST model', () => {
    const restModel = emptyPresets.restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = emptyPresets.graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Image "empty" preset compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = emptyPresets.compatPreset().build<TImageDraft>();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = emptyPresets.compatPreset().buildRest<TImageDraftRest>();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = emptyPresets
      .compatPreset()
      .buildGraphql<TImageDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});

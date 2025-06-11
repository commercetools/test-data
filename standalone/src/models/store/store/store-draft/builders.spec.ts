import type {
  TStoreDraft,
  TStoreDraftGraphql,
  TStoreDraftRest,
} from '../types';
import { StoreDraftGraphql, StoreDraftRest, StoreDraft } from './index';

const validateModel = (
  model: TStoreDraft | TStoreDraftRest | TStoreDraftGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      languages: expect.any(Array),
      countries: expect.any(Array),
      distributionChannels: null,
      supplyChannels: null,
      productSelections: null,
      custom: null,
    })
  );
};

const validateRestModel = (model: TStoreDraftRest) => {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
    })
  );
};

const validateGraphqlModel = (model: TStoreDraftGraphql) => {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
    })
  );
};

describe('StoreDraft builder', () => {
  it('builds a Rest model', () => {
    const model = StoreDraftRest.random().buildRest();
    validateRestModel(model);
  });

  it('builds a Graphql model', () => {
    const model = StoreDraftGraphql.random().buildGraphql();
    validateGraphqlModel(model);
  });

  describe('StoreDraft model compatibility builders', () => {
    it('builds a default model', () => {
      const model = StoreDraft.random().build<TStoreDraft>();
      validateRestModel(model);
    });

    it('builds a Rest model', () => {
      const model = StoreDraft.random().buildRest<TStoreDraftRest>();
      validateRestModel(model);
    });

    it('builds a Graphql model', () => {
      const model = StoreDraft.random().buildGraphql<TStoreDraftGraphql>();
      validateGraphqlModel(model);
    });
  });
});

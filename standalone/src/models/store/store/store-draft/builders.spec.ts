/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import type { TStoreDraftGraphql, TStoreDraftRest } from '../types';
import { StoreDraftGraphql, StoreDraftRest, StoreDraft } from './index';

const validateRestModel = (model: TStoreDraftRest | TStoreDraftGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      name: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
      languages: expect.any(Array),
      countries: expect.any(Array),
      distributionChannels: null,
      supplyChannels: null,
      productSelections: null,
      custom: null,
    })
  );
};

const validateGraphqlModel = (model: TStoreDraftGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      key: expect.any(String),
      name: expect.any(Array),
      languages: expect.any(Array),
      countries: expect.any(Array),
      distributionChannels: null,
      supplyChannels: null,
      productSelections: null,
      custom: null,
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
    it('builds a Rest model', () => {
      const model = StoreDraft.random().buildRest();
      validateRestModel(model);
    });

    it('builds a Graphql model', () => {
      const model = StoreDraft.random().buildGraphql();
      validateGraphqlModel(model);
    });
  });
});

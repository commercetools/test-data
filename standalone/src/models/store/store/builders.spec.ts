import type { TStoreGraphql, TStoreRest } from './types';
import { StoreRest, StoreGraphql, Store } from './index';

const validateRestModel = (model: TStoreRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      key: expect.any(String),
      name: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
      languages: expect.any(Array),
      countries: expect.any(Array),
      distributionChannels: expect.any(Array),
      supplyChannels: expect.any(Array),
      productSelections: [],
      custom: null,
      createdAt: expect.any(String),
      createdBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
      lastModifiedAt: expect.any(String),
      lastModifiedBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
    })
  );
};

const validateGraphqlModel = (model: TStoreGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'Store',
      id: expect.any(String),
      key: expect.any(String),
      languages: expect.any(Array),
      name: expect.any(String),
      nameAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
        }),
      ]),
      countries: expect.any(Array),
      custom: null,
      distributionChannels: expect.any(Array),
      distributionChannelsRef: expect.any(Array),
      supplyChannels: expect.any(Array),
      supplyChannelsRef: expect.any(Array),
      productSelections: [],
      createdAt: expect.any(String),
      createdBy: expect.objectContaining({
        __typename: 'Initiator',
      }),
      lastModifiedAt: expect.any(String),
      lastModifiedBy: expect.objectContaining({
        __typename: 'Initiator',
      }),
      version: expect.any(Number),
    })
  );
};

describe('Store builder', () => {
  it('builds a Rest model', () => {
    const model = StoreRest.random().buildRest();
    validateRestModel(model);
  });

  it('builds a Graphql model', () => {
    const model = StoreGraphql.random().buildGraphql();
    validateGraphqlModel(model);
  });

  describe('Store model compatibility builders', () => {
    it('builds a Rest model', () => {
      const model = Store.random().buildRest<TStoreRest>();
      validateRestModel(model);
    });

    it('builds a Graphql model', () => {
      const model = Store.random().buildGraphql<TStoreGraphql>();
      validateGraphqlModel(model);
    });
  });
});

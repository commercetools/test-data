import { TProductVariantGraphql, TProductVariantRest } from '../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './happy-cow-milk-master-variant';

const validateRestModel = (model: TProductVariantRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: 1,
      key: 'happy-cow-master-variant-key',
      sku: 'happy-cow-master-variant-sku',
      attributes: expect.arrayContaining([
        expect.objectContaining({
          name: 'cow-name',
          value: 'Buryonka',
        }),
        expect.objectContaining({
          name: 'lactose-free',
          value: false,
        }),
      ]),
    })
  );
};

const validateGraphqlModel = (
  model: TProductVariantRest | TProductVariantGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: 1,
      key: 'happy-cow-master-variant-key',
      sku: 'happy-cow-master-variant-sku',
      attributesRaw: expect.arrayContaining([
        expect.objectContaining({
          name: 'cow-name',
          value: 'Buryonka',
          __typename: 'RawProductAttribute',
        }),
        expect.objectContaining({
          name: 'lactose-free',
          value: false,
          __typename: 'RawProductAttribute',
        }),
      ]),
      __typename: 'ProductVariant',
    })
  );
};

describe('HappyCowMilkMasterVariant preset builders', () => {
  it('builds a REST model', () => {
    const restModel = restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('HappyCowMilkMasterVariant preset compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = compatPreset().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = compatPreset().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = compatPreset().buildGraphql();

    validateGraphqlModel(graphqlModel);
  });
});

import { TProductVariantGraphql, TProductVariantRest } from '../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './boring-generic-milk-master-variant';

const validateRestModel = (model: TProductVariantRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: 1,
      key: 'boring-generic-milk-master-variant-key',
      sku: 'boring-generic-milk-master-variant-sku',
      attributes: expect.arrayContaining([
        expect.objectContaining({
          name: 'cow-name',
          value: 'unknown',
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
      key: 'boring-generic-milk-master-variant-key',
      sku: 'boring-generic-milk-master-variant-sku',
      attributesRaw: expect.arrayContaining([
        expect.objectContaining({
          name: 'cow-name',
          value: 'unknown',
          __typename: 'RawProductAttribute',
        }),
      ]),
      __typename: 'ProductVariant',
    })
  );
};

describe('BoringGenericMilkMasterVariant preset builders', () => {
  it('builds a REST model', () => {
    const restModel = restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('BoringGenericMilkMasterVariant preset compatibility builders', () => {
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

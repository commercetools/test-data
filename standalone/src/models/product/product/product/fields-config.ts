import { buildGraphqlList, fake, oneOf, type TModelFieldsConfig } from '@/core';
import {
  ClientLogging,
  ReferenceGraphql,
  ReferenceRest,
} from '@/models/commons';
import { ProductType } from '@/models/product-type';
import { TaxCategory } from '@/models/tax-category';
import { createRelatedDates } from '@/utils';
import {
  ProductCatalogDataGraphql,
  ProductCatalogDataRest,
} from '../product-catalog-data';
import { productPriceMode } from './constants';
import type { TProductGraphql, TProductRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  key: fake((f) => f.lorem.slug(2)),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  priceMode: oneOf(...Object.values(productPriceMode)),
  reviewRatingStatistics: null,
  state: null,
  version: fake((f) => f.number.int()),
  warnings: fake(() => []),
};

export const restFieldsConfig: TModelFieldsConfig<TProductRest> = {
  fields: {
    ...commonFieldsConfig,
    masterData: fake(() => ProductCatalogDataRest.random()),
    productType: fake((f) => {
      const productTypeId = f.string.uuid();
      return ReferenceRest.presets
        .productTypeReference()
        .id(productTypeId)
        .obj(ProductType.random().id(productTypeId));
    }),
    taxCategory: null,
  },
  postBuild: (model) => {
    const result = { ...model };
    // This is required because the 'productType' prop has a different type for REST and GraphQL
    // and compatibility presets can use just one value for it. We decided to use the GraphQL
    // one so here we check whether the productType has the GraphQL shape and convert it to
    // REST (it should be a reference) if needed.
    if (model.productType && !model.productType.typeId) {
      result.productType = ReferenceRest.presets
        .productTypeReference()
        .id(model.productType.id)
        .obj(model.productType)
        .build();
    }
    return result;
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TProductGraphql> = {
  fields: {
    ...commonFieldsConfig,
    masterData: fake(() => ProductCatalogDataGraphql.random()),
    productSelectionRefs: fake(() =>
      buildGraphqlList([], { __typename: 'SelectionOfProductQueryResult' })
    ),
    productType: fake(() => ProductType.random()),
    productTypeRef: null,
    skus: fake(() => []),
    stateRef: null,
    taxCategory: null,
    taxCategoryRef: null,
    __typename: 'Product',
  },
  postBuild: (model) => {
    if (model.productType) {
      model.productTypeRef = ReferenceGraphql.presets
        .productTypeReference()
        .id(model.productType.id)
        .build();
    }
    if (model.state) {
      model.stateRef = ReferenceGraphql.presets
        .stateReference()
        .id(model.state.id)
        .build();
    }
    if (model.taxCategory) {
      model.taxCategoryRef = ReferenceGraphql.presets
        .taxCategoryReference()
        .id(model.taxCategory.id)
        .build();
    }
    return model;
  },
};

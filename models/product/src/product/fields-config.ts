import {
  ClientLogging,
  ReferenceGraphql,
} from '@commercetools-test-data/commons';
import {
  buildGraphqlList,
  fake,
  oneOf,
  type TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { ProductType } from '@commercetools-test-data/product-type';
import { TaxCategory } from '@commercetools-test-data/tax-category';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { ProductCatalogData } from '../index';
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
  masterData: fake(() => ProductCatalogData.random()),
  priceMode: oneOf(...Object.values(productPriceMode)),
  productType: fake(() => ProductType.random()),
  reviewRatingStatistics: null,
  state: null,
  taxCategory: fake(() => TaxCategory.random()),
  version: fake((f) => f.number.int()),
  warnings: fake(() => []),
};

export const restFieldsConfig: TModelFieldsConfig<TProductRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TProductGraphql> = {
  fields: {
    ...commonFieldsConfig,
    productSelectionRefs: fake(() =>
      buildGraphqlList([], { __typename: 'SelectionOfProductQueryResult' })
    ),
    productTypeRef: null,
    skus: fake(() => []),
    stateRef: null,
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

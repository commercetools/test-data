import {
  ClientLogging,
  KeyReference,
  ReferenceGraphql,
  ReferenceRest,
} from '@commercetools-test-data/commons';
import {
  fake,
  sequence,
  type TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import {
  ProductTailoringDataRest,
  ProductTailoringDataGraphql,
} from '../product-tailoring-data';
import type { TProductTailoringGraphql, TProductTailoringRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  createdAt: fake(getOlderDate),
  lastModifiedAt: fake(getNewerDate),
  key: fake((f) => f.string.uuid()),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedBy: fake(() => ClientLogging.random()),
  published: fake((f) => f.datatype.boolean()),
  hasStagedChanges: fake((f) => f.datatype.boolean()),
};

export const restFieldsConfig: TModelFieldsConfig<TProductTailoringRest> = {
  fields: {
    ...commonFieldsConfig,
    product: fake(() => ReferenceRest.random().typeId('product')),
    store: fake(() => ReferenceRest.random().typeId('store')),
    current: fake(() => ProductTailoringDataRest.random()),
    staged: fake(() => ProductTailoringDataRest.random()),
    warnings: [],
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TProductTailoringGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'ProductTailoring',
      product: null,
      store: null,
      productRef: null,
      storeRef: null,
      current: fake(() => ProductTailoringDataGraphql.random()),
      staged: fake(() => ProductTailoringDataGraphql.random()),
    },
    postBuild: (model) => {
      const productRef = model.product
        ? ReferenceGraphql.random()
            .typeId('product')
            .id(model.product.id)
            .buildGraphql()
        : undefined;

      const storeRef = model.store
        ? KeyReference.random()
            .typeId('store')
            .key(model.store.key)
            .buildGraphql()
        : undefined;

      return {
        productRef,
        storeRef,
      };
    },
  };

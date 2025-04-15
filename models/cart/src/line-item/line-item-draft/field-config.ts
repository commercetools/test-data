import {
  MoneyDraft,
  ReferenceRest,
  ReferenceGraphql,
} from '@commercetools-test-data/commons';
import {
  fake,
  type TModelFieldsConfig,
  oneOf,
} from '@commercetools-test-data/core';
import {} from '@commercetools-test-data/product/src/product-variant';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { inventoryMode } from '../../cart/constants';
import { TLineItemDraftRest, TLineItemDraftGraphql } from '../types';

const [addedAt] = createRelatedDates();

const commonFieldsConfig = {
  key: fake((f) => f.string.uuid()),
  productId: fake((f) => f.string.uuid()),
  variantId: fake((f) => f.string.uuid()),
  sku: fake((f) => f.string.uuid()),
  quantity: fake((f) => f.number.int({ min: 1 })),
  addedAt: fake(addedAt),
  externalPrice: fake(() => MoneyDraft.random()),
  externalTotalPrice: null,
  externalTaxRate: null,
  inventoryMode: oneOf(...Object.values(inventoryMode)),
  shippingDetails: null,
  distributionChannel: null,
  supplyChannel: null,
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TLineItemDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    perMethodExternalTaxRate: [],
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TLineItemDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
  },
};

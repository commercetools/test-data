import { fake, type TModelFieldsConfig } from '@/core';
import {
  TShoppingListLineItemDraftRest,
  TShoppingListLineItemDraftGraphql,
} from '../types';

const commonFieldsConfig = {
  addedAt: null,
  custom: null,
  deactivatedAt: null,
  key: null,
  productId: fake((f) => f.string.uuid()),
  quantity: fake((f) => f.number.int({ min: 1 })),
  sku: null,
  variantId: fake((f) => f.number.int({ min: 1 })),
};

export const restFieldsConfig: TModelFieldsConfig<TShoppingListLineItemDraftRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TShoppingListLineItemDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };

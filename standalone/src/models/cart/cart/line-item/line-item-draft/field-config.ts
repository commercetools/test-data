import { fake, type TModelFieldsConfig, oneOf, sequence } from '@/core';
import {
  MoneyDraft,
  ReferenceDraftRest,
  ReferenceDraftGraphql,
} from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { inventoryMode } from '../../cart/constants';
import { TLineItemDraftRest, TLineItemDraftGraphql } from '../types';

const [addedAt] = createRelatedDates();

const commonFieldsConfig = {
  key: fake((f) => f.string.uuid()),
  productId: fake((f) => f.string.uuid()),
  variantId: sequence(),
  sku: fake((f) => `${f.lorem.word()}-${f.string.alphanumeric(3)}`),
  quantity: fake((f) => f.number.int({ min: 1 })),
  addedAt: fake(addedAt),
  externalPrice: fake(() => MoneyDraft.random()),
  externalTotalPrice: null,
  externalTaxRate: null,
  inventoryMode: oneOf(...Object.values(inventoryMode)),
  shippingDetails: null,
  recurrenceInfo: null,
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TLineItemDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    distributionChannel: fake(() =>
      ReferenceDraftRest.presets.channelReference()
    ),
    supplyChannel: fake(() => ReferenceDraftRest.presets.channelReference()),
    perMethodExternalTaxRate: [],
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TLineItemDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
    distributionChannel: fake(() =>
      ReferenceDraftGraphql.presets.channelReference()
    ),
    supplyChannel: fake(() => ReferenceDraftGraphql.presets.channelReference()),
    perMethodExternalTaxRate: null,
  },
};

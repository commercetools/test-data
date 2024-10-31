import { Channel } from '@commercetools-test-data/channel';
import {
  ClientLogging,
  Reference,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import {
  fake,
  sequence,
  type TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TInventoryEntryGraphql, TInventoryEntryRest } from './types';

const [getOlderDate, getNewerDate, getFutureDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  key: fake((f) => f.lorem.slug(2)),
  sku: fake((f) => f.lorem.words()),
  supplyChannel: fake(() => Channel.random()),
  quantityOnStock: fake((f) => f.number.int()),
  availableQuantity: fake((f) => f.number.int()),
  restockableInDays: fake((f) => f.number.int()),
  expectedDelivery: fake(getFutureDate),
  custom: null,
};
export const restFieldsConfig: TModelFieldsConfig<TInventoryEntryRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TInventoryEntryGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'InventoryEntry',
    supplyChannelRef: fake((f) => f.string.uuid()),
  },
  postBuild: (model) => {
    const supply = model.supplyChannelRef
      ? Reference.presets
          .channelReference()
          .id(model.supplyChannel.id)
          .buildGraphql<TReferenceGraphql<'channel'>>()
      : undefined;
    return {
      supply,
    };
  },
};

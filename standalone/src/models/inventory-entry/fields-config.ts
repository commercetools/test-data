import { fake, sequence, type TModelFieldsConfig } from '@/core';
import { ClientLogging, Reference, TReferenceGraphql } from '@/models/commons';
import { createRelatedDates } from '@/utils';
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
  quantityOnStock: fake((f) => f.number.int()),
  availableQuantity: fake((f) => f.number.int()),
  restockableInDays: fake((f) => f.number.int()),
  expectedDelivery: fake(getFutureDate),
  supplyChannel: null,
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
    reservationExpirationInMinutes: null,
    supplyChannelRef: null,
    __typename: 'InventoryEntry',
  },
  postBuild: (model) => {
    const supplyChannelRef = model.supplyChannel
      ? Reference.presets
          .channelReference()
          .id(model.supplyChannel.id)
          .buildGraphql<TReferenceGraphql<'channel'>>()
      : null;
    return {
      ...model,
      supplyChannelRef,
    };
  },
};

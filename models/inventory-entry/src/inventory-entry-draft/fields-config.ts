import { ChannelGraphql } from '@commercetools-test-data/channel';
import {
  Reference,
  ReferenceDraft,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../types';

const [getFutureDate] = createRelatedDates();

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(2)),
  sku: fake((f) => f.lorem.words()),
  quantityOnStock: fake((f) => f.number.int({ min: 11, max: 30 })),
  restockableInDays: fake((f) => f.number.int({ min: 1, max: 10 })),
  expectedDelivery: fake(getFutureDate),
  supplyChannel: fake(() => ReferenceDraft.random().typeId('channel')),
  custom: null,
};
export const restFieldsConfig: TModelFieldsConfig<TInventoryEntryDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    supplyChannel: fake(() => Reference.presets.channelReference()),
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TInventoryEntryDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      supplyChannel: fake(() => ChannelGraphql.random()),
    },
  };

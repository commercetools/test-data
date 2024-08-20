import { Channel, TChannelGraphql } from '@commercetools-test-data/channel';
import { Reference, TReferenceGraphql } from '@commercetools-test-data/commons';
import { buildField, Transformer } from '@commercetools-test-data/core';
import type {
  TInventoryEntry,
  TInventoryEntryRest,
  TInventoryEntryGraphql,
} from './types';

const transformers = {
  default: Transformer<TInventoryEntry, TInventoryEntry>('default', {
    buildFields: ['supplyChannel'],
  }),
  rest: Transformer<TInventoryEntry, TInventoryEntryRest>('rest', {
    buildFields: ['supplyChannel'],
  }),
  graphql: Transformer<TInventoryEntry, TInventoryEntryGraphql>('graphql', {
    replaceFields: ({ fields }) => {
      const restSupplyChannel = buildField(fields.supplyChannel, 'rest');
      const supplyChannelRef = Reference.presets
        .channelReference()
        .id(fields.supplyChannel.id)
        .buildGraphql<TReferenceGraphql>();

      const supplyChannel = Channel.random()
        .description(restSupplyChannel.description)
        .id(restSupplyChannel.id)
        .key(restSupplyChannel.key)
        .name(restSupplyChannel.name)
        .buildGraphql<TChannelGraphql>();

      return {
        ...fields,
        supplyChannel,
        supplyChannelRef,
        __typename: 'InventoryEntry',
      };
    },
  }),
};

export default transformers;

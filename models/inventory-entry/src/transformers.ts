import { Channel, TChannelGraphql } from '@commercetools-test-data/channel';
import {
  LocalizedString,
  Reference,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
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
    buildFields: false,
    replaceFields: ({ fields }) => {
      let supplyChannel: TChannelGraphql | undefined = undefined;
      let supplyChannelRef: TReferenceGraphql | undefined = undefined;

      if (fields.supplyChannel) {
        const restSupplyChannelRef = buildField(fields.supplyChannel, 'rest');

        supplyChannelRef = Reference.presets
          .channelReference()
          .id(restSupplyChannelRef.id)
          .buildGraphql<TReferenceGraphql>();

        supplyChannel = Channel.random()
          .description(restSupplyChannelRef.obj!.description)
          .id(restSupplyChannelRef.id)
          .key(restSupplyChannelRef.obj!.key)
          .name(
            LocalizedString.presets
              .empty()
              .en(restSupplyChannelRef.obj!.name?.en)
              .de(restSupplyChannelRef.obj!.name?.de)
          )
          .buildGraphql<TChannelGraphql>();
      }

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

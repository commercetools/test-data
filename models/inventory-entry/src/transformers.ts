import {
  Reference,
  TReference,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
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
    replaceFields: ({ fields }) => {
      const supplyChannel = Reference.presets.channelReference
        .channelReference()
        .id(fields.supplyChannel.id)
        .build<TReference<'channel'>>();
      return {
        ...fields,
        supplyChannel,
      };
    },
  }),
  graphql: Transformer<TInventoryEntry, TInventoryEntryGraphql>('graphql', {
    buildFields: ['supplyChannel'],
    replaceFields: ({ fields }) => {
      const supplyChannelRef = Reference.presets.channelReference
        .channelReference()
        .id(fields.supplyChannel.id)
        .buildGraphql<TReferenceGraphql<'channel'>>();
      return {
        ...fields,
        supplyChannelRef,
        __typename: 'InventoryEntry',
      };
    },
  }),
};

export default transformers;

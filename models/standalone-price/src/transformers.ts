import {
  Reference,
  TReference,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type {
  TStandalonePrice,
  TStandalonePriceGraphql,
  TStandalonePriceRest,
} from './types';

const transformers = {
  default: Transformer<TStandalonePrice, TStandalonePrice>('default', {
    buildFields: [
      'lastModifiedBy',
      'createdBy',
      'value',
      'customerGroup',
      'channel',
      'tiers',
    ],
  }),
  rest: Transformer<TStandalonePrice, TStandalonePriceRest>('rest', {
    buildFields: [
      'lastModifiedBy',
      'createdBy',
      'value',
      'customerGroup',
      'channel',
      'tiers',
    ],
    replaceFields: ({ fields }) => {
      // Remove `expiresAt` from the fields
      const { expiresAt, ...rest } = fields;

      const customerGroup = fields.customerGroup
        ? Reference.random()
            .typeId('customer-group')
            .id(fields.customerGroup.id)
            .buildRest<TReference<'customer-group'>>()
        : undefined;

      const channel = fields.channel
        ? Reference.random()
            .typeId('channel')
            .id(fields.channel.id)
            .buildRest<TReference<'channel'>>()
        : undefined;

      return {
        ...rest,
        customerGroup,
        channel,
      };
    },
  }),
  graphql: Transformer<TStandalonePrice, TStandalonePriceGraphql>('graphql', {
    buildFields: [
      'lastModifiedBy',
      'createdBy',
      'value',
      'customerGroup',
      'channel',
      'tiers',
    ],
    replaceFields: ({ fields }) => {
      const customerGroupRef = fields.customerGroup
        ? Reference.random()
            .typeId('customer-group')
            .id(fields.customerGroup.id)
            .buildGraphql<TReferenceGraphql<'customer-group'>>()
        : null;

      const channelRef = fields.channel
        ? Reference.random()
            .typeId('channel')
            .id(fields.channel.id)
            .buildGraphql<TReferenceGraphql<'channel'>>()
        : null;

      return {
        ...fields,
        __typename: 'StandalonePrice',
        customerGroupRef,
        channelRef,
      };
    },
  }),
};

export default transformers;

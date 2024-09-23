import { Channel, TChannelGraphql } from '@commercetools-test-data/channel';
import {
  Reference,
  TReference,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import { buildField, Transformer } from '@commercetools-test-data/core';
import {
  CustomerGroup,
  TCustomerGroupGraphql,
} from '@commercetools-test-data/customer-group';
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
      'custom',
      'discounted',
      'staged',
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
      'custom',
      'discounted',
      'staged',
    ],
    replaceFields: ({ fields }) => {
      const mainCurrency = fields.value.currencyCode;

      return {
        ...fields,
        tiers: fields.tiers
          ? fields.tiers.map((tier) => ({
              ...tier,
              value: {
                ...tier.value,
                currencyCode: mainCurrency,
              },
            }))
          : [],
        staged: fields.staged
          ? {
              ...fields.staged,
              value: {
                ...fields.staged.value,
                currencyCode: mainCurrency,
              },
            }
          : undefined,
      };
    },
  }),
  graphql: Transformer<TStandalonePrice, TStandalonePriceGraphql>('graphql', {
    buildFields: ['lastModifiedBy', 'createdBy', 'value', 'tiers'],
    replaceFields: ({ fields }) => {
      let channel: TChannelGraphql | undefined = undefined;
      let channelRef: TReferenceGraphql | undefined = undefined;
      let customerGroup: TCustomerGroupGraphql | undefined = undefined;
      let customerGroupRef: TReferenceGraphql | undefined = undefined;

      if (fields.customerGroup) {
        const restCustomerGroupRef = buildField(fields.customerGroup, 'rest');
        customerGroupRef = Reference.presets
          .customerGroupReference()
          .id(restCustomerGroupRef.id)
          .buildGraphql<TReferenceGraphql>();

        customerGroup = CustomerGroup.random()
          .id(restCustomerGroupRef.id)
          .key(restCustomerGroupRef.obj!.key)
          .name(restCustomerGroupRef.obj!.name)
          .buildGraphql<TCustomerGroupGraphql>();
      }

      if (fields.channel) {
        const restChannelRef = buildField(fields.channel, 'rest');
        channelRef = Reference.presets
          .channelReference()
          .id(restChannelRef.id)
          .buildGraphql<TReferenceGraphql>();

        channel = Channel.random()
          .id(restChannelRef.id)
          .key(restChannelRef.obj!.key)
          .name(restChannelRef.obj!.name)
          .buildGraphql<TChannelGraphql>();
      }

      const mainCurrency = fields.value.currencyCode;

      const adjustedFields: TStandalonePriceGraphql = {
        ...fields,
        __typename: 'StandalonePrice',
        channel,
        channelRef,
        customerGroup,
        customerGroupRef,
        custom: fields.custom || null,
        // Currency sync
        tiers: fields.tiers
          ? fields.tiers.map((tier) => ({
              ...tier,
              value: {
                ...tier.value,
                currencyCode: mainCurrency,
              },
            }))
          : null,
        staged: fields.staged
          ? {
              ...fields.staged,
              value: {
                ...fields.staged.value,
                currencyCode: mainCurrency,
              },
            }
          : null,
        discounted: fields.discounted || null,
      };

      return adjustedFields;
    },
  }),
};

export default transformers;

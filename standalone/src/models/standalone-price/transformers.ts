import { Transformer } from '@/core';
import {
  Reference,
  ReferenceGraphql,
  ReferenceRest,
  TReference,
  TReferenceGraphql,
} from '@/models/commons';
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
      'recurrencePolicy',
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
      'recurrencePolicy',
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

      const recurrencePolicy = fields.recurrencePolicy
        ? ReferenceRest.random()
            .typeId('recurrence-policy')
            .id(fields.recurrencePolicy.id)
            .build<TReference<'recurrence-policy'>>()
        : undefined;

      const mainCurrency = fields.value.currencyCode;

      const adjustedFields = {
        ...rest,
        customerGroup,
        channel,
        recurrencePolicy,
        // Currency sync
        tiers: fields.tiers
          ? fields.tiers.map((tier) => ({
              ...tier,
              value: {
                ...tier.value,
                currencyCode: mainCurrency,
              },
            }))
          : undefined,
        staged: fields.staged
          ? {
              ...fields.staged,
              value: {
                ...fields.staged.value,
                currencyCode: mainCurrency,
              },
            }
          : undefined,
        discounted: fields.discounted || undefined,
      } as TStandalonePriceRest;

      return adjustedFields;
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
      'custom',
      'discounted',
      'staged',
      'recurrencePolicy',
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

      const recurrencePolicyRef = fields.recurrencePolicy
        ? ReferenceGraphql.random()
            .typeId('recurrence-policy')
            .id(fields.recurrencePolicy.id)
            .build<TReferenceGraphql<'recurrence-policy'>>()
        : null;

      const mainCurrency = fields.value.currencyCode;

      const adjustedFields = {
        ...fields,
        __typename: 'StandalonePrice' as const,
        customerGroupRef,
        channelRef,
        recurrencePolicyRef,
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
      } as TStandalonePriceGraphql;

      return adjustedFields;
    },
  }),
};

export default transformers;

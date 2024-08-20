import { TChannel } from '@commercetools-test-data/channel';
import {
  Reference,
  KeyReference,
  TReferenceGraphql,
  TReferenceRest,
} from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import { type TCustomerGroup } from '@commercetools-test-data/customer-group';
import type {
  TStandalonePrice,
  TStandalonePriceGraphql,
  TStandalonePriceRest,
} from './types';

// Overloads
function createCustomerGroupReference(
  customerGroup: TCustomerGroup,
  target: 'rest'
): TReferenceRest<TCustomerGroup>;
function createCustomerGroupReference(
  customerGroup: TCustomerGroup,
  target: 'graphql'
): TReferenceGraphql;

// Create a customer group reference depending on `id` or `key` field availability
function createCustomerGroupReference(
  customerGroup: TCustomerGroup,
  target: 'graphql' | 'rest'
) {
  let referenceBuilder;

  // `key` is optional in CustomerGroup, prioritize it over `id`
  if (customerGroup.key) {
    referenceBuilder = KeyReference.random()
      .typeId('customer-group')
      .key(customerGroup.key);
  } else if (customerGroup.id) {
    referenceBuilder = Reference.random()
      .typeId('customer-group')
      .id(customerGroup.id);
  }

  // Dynamically call buildRest or buildGraphql based on target
  if (referenceBuilder) {
    return target === 'rest'
      ? referenceBuilder.buildRest<TReferenceRest<TCustomerGroup>>()
      : referenceBuilder.buildGraphql<TReferenceGraphql>();
  }
}

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

      const channel = fields.channel
        ? KeyReference.random()
            .typeId('channel')
            .key(fields.channel.key)
            .buildRest<TReferenceRest<TChannel>>()
        : undefined;

      return {
        ...rest,
        customerGroup: fields.customerGroup
          ? createCustomerGroupReference(fields.customerGroup, 'rest')
          : undefined,
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
    addFields: ({ fields }) => {
      const customerGroupRef = fields.customerGroup
        ? createCustomerGroupReference(fields.customerGroup, 'graphql')
        : null;
      const channelRef = fields.channel
        ? KeyReference.random()
            .typeId('channel')
            .key(fields.channel.key)
            .buildGraphql<TReferenceGraphql>()
        : null;

      return { __typename: 'StandalonePrice', customerGroupRef, channelRef };
    },
  }),
};

export default transformers;

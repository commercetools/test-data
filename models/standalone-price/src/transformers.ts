import {
  Reference,
  KeyReference,
  TReference,
  TReferenceGraphql,
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
  customerGroup: TCustomerGroup
): TReference<'customer-group'>;

// Create a customer group reference depending on `id` or `key` field availability
function createCustomerGroupReference(customerGroup: TCustomerGroup) {
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
    return referenceBuilder.buildRest<TReference<'customer-group'>>();
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
            .buildRest<TReference<'channel'>>()
        : undefined;

      return {
        ...rest,
        customerGroup: fields.customerGroup
          ? createCustomerGroupReference(fields.customerGroup)
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

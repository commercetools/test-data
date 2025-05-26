import { Transformer } from '@/core';
import { ReferenceGraphql } from '../reference';
import type { TPrice, TPriceGraphql } from './types';

const transformers = {
  default: Transformer<TPrice, TPrice>('default', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
      'recurrencePolicy',
    ],
  }),
  rest: Transformer<TPrice, TPrice>('rest', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
      'recurrencePolicy',
    ],
  }),
  graphql: Transformer<TPrice, TPriceGraphql>('graphql', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
      'recurrencePolicy',
    ],
    addFields: ({ fields }) => ({
      recurrencePolicyRef: fields.recurrencePolicy
        ? ReferenceGraphql.random()
            .typeId('recurrence-policy')
            .id(fields.recurrencePolicy.id)
            .build()
        : null,
      __typename: 'ProductPrice',
    }),
  }),
};

export default transformers;

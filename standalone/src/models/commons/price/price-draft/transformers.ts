import { Transformer } from '@/core';
import { MoneyDraft, TMoneyDraftGraphql } from '../../money';
import type { TPriceDraft, TPriceDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TPriceDraft, TPriceDraft>('default', {
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
  rest: Transformer<TPriceDraft, TPriceDraft>('rest', {
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
  graphql: Transformer<TPriceDraft, TPriceDraftGraphql>('graphql', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'discounted',
      'custom',
      'recurrencePolicy',
    ],
    replaceFields: ({ fields }) => {
      return {
        ...fields,
        value: {
          centPrecision: MoneyDraft.random()
            .centAmount(fields.value.centAmount ?? 0)
            .currencyCode(fields.value.currencyCode)
            .buildGraphql<TMoneyDraftGraphql>(),
        },
      } as TPriceDraftGraphql;
    },
  }),
};

export default transformers;

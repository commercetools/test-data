import { TMoneyDraftGraphql } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type {
  TStandalonePriceDraft,
  TStandalonePriceDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TStandalonePriceDraft, TStandalonePriceDraft>(
    'default',
    {
      buildFields: ['value', 'customerGroup', 'channel', 'tiers', 'staged'],
    }
  ),
  rest: Transformer<TStandalonePriceDraft, TStandalonePriceDraft>('rest', {
    buildFields: ['value', 'customerGroup', 'channel', 'tiers', 'staged'],
  }),
  graphql: Transformer<TStandalonePriceDraft, TStandalonePriceDraftGraphql>(
    'graphql',
    {
      buildFields: ['value', 'customerGroup', 'channel', 'tiers', 'staged'],
      replaceFields: ({ fields }) => {
        const newFields = {
          ...fields,
          value: {
            centPrecision: fields.value as TMoneyDraftGraphql,
          },
        };

        if (fields.tiers) {
          newFields.tiers = fields.tiers!.map((tier) => ({
            ...tier,
            value: {
              ...(tier.value as TMoneyDraftGraphql),
              currencyCode: fields.value.currencyCode,
            },
          }));
        }

        if (fields.staged) {
          newFields.staged = {
            value: {
              ...fields.staged.value,
              currencyCode: fields.value.currencyCode,
            },
          };
        }
        return newFields;
      },
    }
  ),
};

export default transformers;

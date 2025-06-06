import { Transformer } from '@/core';
import { TMoneyDraftGraphql } from '@/models/commons';
import type {
  TStandalonePriceDraft,
  TStandalonePriceDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TStandalonePriceDraft, TStandalonePriceDraft>(
    'default',
    {
      buildFields: [
        'value',
        'customerGroup',
        'channel',
        'tiers',
        'staged',
        'recurrencePolicy',
      ],
    }
  ),
  rest: Transformer<TStandalonePriceDraft, TStandalonePriceDraft>('rest', {
    buildFields: [
      'value',
      'customerGroup',
      'channel',
      'tiers',
      'staged',
      'recurrencePolicy',
    ],
    replaceFields: ({ fields }) => {
      const newFields = {
        ...fields,
      };

      if (fields.tiers) {
        newFields.tiers = fields.tiers!.map((tier) => ({
          ...tier,
          value: {
            ...tier.value,
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
  }),
  graphql: Transformer<TStandalonePriceDraft, TStandalonePriceDraftGraphql>(
    'graphql',
    {
      buildFields: [
        'value',
        'customerGroup',
        'channel',
        'tiers',
        'staged',
        'recurrencePolicy',
      ],
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
              ...tier.value,
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
        return newFields as TStandalonePriceDraftGraphql;
      },
    }
  ),
};

export default transformers;

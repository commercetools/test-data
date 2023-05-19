import { LocalizedString } from '@commercetools-test-data/commons';
import { buildField, Transformer } from '@commercetools-test-data/core';
import type {
  TProductDiscountDraft,
  TProductDiscountDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TProductDiscountDraft, TProductDiscountDraft>(
    'default',
    { buildFields: ['value', 'name', 'description'] }
  ),
  rest: Transformer<TProductDiscountDraft, TProductDiscountDraft>('rest', {
    buildFields: ['value', 'name', 'description'],
  }),
  graphql: Transformer<TProductDiscountDraft, TProductDiscountDraftGraphql>(
    'graphql',
    {
      replaceFields: ({ fields }) => {
        const { type, ...rest } = buildField(fields.value, 'graphql');

        return {
          ...fields,
          name: LocalizedString.toLocalizedField(fields.name)!,
          description: LocalizedString.toLocalizedField(fields.description),
          value: {
            [type]: { ...rest },
          },
        };
      },
    }
  ),
};

export default transformers;

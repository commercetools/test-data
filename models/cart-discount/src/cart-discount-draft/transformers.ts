import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCartDiscountDraft, TCartDiscountDraft>('default', {
    buildFields: ['value', 'name', 'description'],
  }),
  rest: Transformer<TCartDiscountDraft, TCartDiscountDraft>('rest', {
    buildFields: ['value', 'name', 'description'],
  }),
  graphql: Transformer<TCartDiscountDraft, TCartDiscountDraftGraphql>(
    'graphql',
    {
      buildFields: ['value', 'name', 'description'],
      addFields: ({ fields }) => ({
        nameAllLocales: LocalizedString.toLocalizedField(fields.name),
        descriptionAllLocales: LocalizedString.toLocalizedField(
          fields.description
        ),
        __typename: 'CartDiscountDraft',
      }),
    }
  ),
};

export default transformers;

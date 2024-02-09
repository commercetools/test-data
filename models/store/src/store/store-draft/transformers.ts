import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TStoreDraft, TStoreDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TStoreDraft, TStoreDraft>('default', {
    buildFields: ['name'],
  }),
  rest: Transformer<TStoreDraft, TStoreDraft>('rest', {
    buildFields: ['name'],
  }),
  //Note that the storeDraft graphql transformer is provided as scaffolding only and may not be complete at this time.
  graphql: Transformer<TStoreDraft, TStoreDraftGraphql>('rest', {
    replaceFields: ({ fields }) => ({
      ...fields,
      name: LocalizedStringDraft.toLocalizedField(fields.name),
    }),
  }),
};

export default transformers;

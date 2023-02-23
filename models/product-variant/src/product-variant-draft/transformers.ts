import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TProductVariantDraft, TProductVariantDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TProductVariantDraft, TProductVariantDraft>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TProductVariantDraft, TProductVariantDraftGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({ __typename: 'ProductVariantInput' }),
    }
  ),
};

export default transformers;

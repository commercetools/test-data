import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TProductVariantDraft, TProductVariantDraft>('default', {
    buildFields: ['prices', 'images', 'attributes'],
  }),
  rest: Transformer<TProductVariantDraft, TProductVariantDraft>('rest', {
    buildFields: ['prices', 'images'],
  }),
  graphql: Transformer<TProductVariantDraft, TProductVariantDraftGraphql>(
    'graphql',
    {
      buildFields: ['prices', 'images'],
      addFields: () => ({ __typename: 'ProductVariantInput' }),
    }
  ),
};

export default transformers;

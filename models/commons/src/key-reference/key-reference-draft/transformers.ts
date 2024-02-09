import { Transformer } from '@commercetools-test-data/core';
import type { TKeyReferenceDraft, TKeyReferenceDraftGraphql } from '.././types';

const transformers = {
  default: Transformer<TKeyReferenceDraft, TKeyReferenceDraft>('default', {}),
  rest: Transformer<TKeyReferenceDraft, TKeyReferenceDraft>('rest', {}),
  graphql: Transformer<TKeyReferenceDraft, TKeyReferenceDraftGraphql>(
    'graphql',
    {}
  ),
};

export default transformers;

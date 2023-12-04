import { Transformer } from '@commercetools-test-data/core';
import type { TCustomObjectDraft, TCustomObjectDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCustomObjectDraft, TCustomObjectDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TCustomObjectDraft, TCustomObjectDraft>('rest', {
    buildFields: [],
  }),
  //only scaffolding provided at this time
  graphql: Transformer<TCustomObjectDraft, TCustomObjectDraftGraphql>(
    'graphql',
    {
      buildFields: [],
    }
  ),
};

export default transformers;

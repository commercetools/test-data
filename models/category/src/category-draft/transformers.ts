import { Transformer } from '@commercetools-test-data/core';
import type { TCategoryDraft, TCategoryDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCategoryDraft, TCategoryDraft>('default', {
    buildFields: ['name', 'slug'],
  }),
  rest: Transformer<TCategoryDraft, TCategoryDraft>('rest', {
    buildFields: ['name', 'slug'],
  }),
  graphql: Transformer<TCategoryDraft, TCategoryDraftGraphql>('graphql', {
    buildFields: ['name', 'slug'],
    addFields: () => ({
      __typename: 'CategoryDraft',
    }),
  }),
};

export default transformers;

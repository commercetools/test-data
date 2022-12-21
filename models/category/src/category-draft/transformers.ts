import { Transformer } from '@commercetools-test-data/core';
import type { TCategoryDraft, TCategoryDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCategoryDraft, TCategoryDraft>('default', {
    buildFields: ['description', 'name', 'slug'],
  }),
  rest: Transformer<TCategoryDraft, TCategoryDraft>('rest', {
    buildFields: ['description', 'name', 'slug'],
  }),
  graphql: Transformer<TCategoryDraft, TCategoryDraftGraphql>('graphql', {
    buildFields: ['description', 'name', 'slug'],
    addFields: () => ({
      __typename: 'CategoryDraft',
    }),
  }),
};

export default transformers;

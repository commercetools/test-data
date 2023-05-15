import { Transformer } from '@commercetools-test-data/core';
import type { TCategoryDraft, TCategoryDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCategoryDraft, TCategoryDraft>('default', {
    buildFields: ['description', 'name', 'slug', 'parent'],
  }),
  rest: Transformer<TCategoryDraft, TCategoryDraft>('rest', {
    buildFields: ['description', 'name', 'slug', 'parent'],
  }),
  graphql: Transformer<TCategoryDraft, TCategoryDraftGraphql>('graphql', {
    buildFields: ['description', 'name', 'slug', 'parent'],
    addFields: () => ({ __typename: 'CategoryDraft' }),
  }),
};

export default transformers;

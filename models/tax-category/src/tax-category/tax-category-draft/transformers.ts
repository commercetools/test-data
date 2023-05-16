import { Transformer } from '@commercetools-test-data/core';
import type { TTaxCategoryDraft, TTaxCategoryDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TTaxCategoryDraft, TTaxCategoryDraft>('default', {
    buildFields: ['rates'],
  }),
  rest: Transformer<TTaxCategoryDraft, TTaxCategoryDraft>('rest', {
    buildFields: ['rates'],
  }),
  graphql: Transformer<TTaxCategoryDraft, TTaxCategoryDraftGraphql>('graphql', {
    buildFields: ['rates'],
  }),
};

export default transformers;

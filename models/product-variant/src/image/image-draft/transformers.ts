import { Transformer } from '@commercetools-test-data/core';
import type { TImageDraft, TImageDraftGraphql } from '../types';

const transformers = {
  graphql: Transformer<TImageDraft, TImageDraftGraphql>('graphql', {
    buildFields: [],
    replaceFields: ({ fields }) => {
      return {
        ...fields,
        dimensions: {
          ...fields.dimensions,
        },
      };
    },
  }),
};

export default transformers;

import { Transformer } from '@/core';
import type { TImageDraft, TImageDraftGraphql } from '../types';

const transformers = {
  graphql: Transformer<TImageDraft, TImageDraftGraphql>('graphql', {
    buildFields: [],
    replaceFields: ({ fields }) => {
      return {
        ...fields,
        dimensions: {
          width: fields.dimensions.w,
          height: fields.dimensions.h,
        },
      };
    },
  }),
};

export default transformers;

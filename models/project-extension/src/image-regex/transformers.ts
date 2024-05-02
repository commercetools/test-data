import { Transformer } from '@commercetools-test-data/core';
import type { TImageRegex, TImageRegexGraphql } from './types';

const buildFields: (keyof TImageRegex)[] = [];

const transformers = {
  default: Transformer<TImageRegex, TImageRegex>('default', {
    buildFields,
  }),
  graphql: Transformer<TImageRegex, TImageRegexGraphql>('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'ImageRegex',
    }),
  }),
};

export default transformers;

import { Transformer } from '@commercetools-test-data/core';
import type { CustomView, CustomViewGraphql } from './types';

const transformers = {
  default: Transformer<CustomView, CustomView>('default', {}),
  graphql: Transformer<CustomView, CustomViewGraphql>('graphql', {
    addFields: () => {
      return {
        __typename: 'CustomView',
      };
    },
  }),
};

export default transformers;

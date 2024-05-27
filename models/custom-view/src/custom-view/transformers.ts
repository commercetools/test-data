import { Transformer } from '@commercetools-test-data/core';
import type { TCustomView, TCustomViewGraphql } from './types';

const transformers = {
  default: Transformer<TCustomView, TCustomView>('default', {
    buildFields: [
      'labelAllLocales',
      'permissions',
      'typeSettings',
      'installedBy',
    ],
  }),
  graphql: Transformer<TCustomView, TCustomViewGraphql>('graphql', {
    buildFields: [
      'labelAllLocales',
      'permissions',
      'typeSettings',
      'installedBy',
    ],
    addFields: () => ({
      __typename: 'CustomView',
    }),
  }),
};

export default transformers;

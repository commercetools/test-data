import { Transformer } from '@commercetools-test-data/core';
import type {
  TCustomApplicationSubmenuLink,
  TCustomApplicationSubmenuLinkGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCustomApplicationSubmenuLink,
    TCustomApplicationSubmenuLink
  >('default', {
    buildFields: ['labelAllLocales'],
  }),
  graphql: Transformer<
    TCustomApplicationSubmenuLink,
    TCustomApplicationSubmenuLinkGraphql
  >('graphql', {
    buildFields: ['labelAllLocales'],
    addFields: () => ({
      __typename: 'CustomApplicationSubmenuLink',
    }),
  }),
};

export default transformers;

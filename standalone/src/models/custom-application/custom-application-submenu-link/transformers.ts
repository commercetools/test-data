import { Transformer } from '../../../core';
import {
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

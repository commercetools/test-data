import { Transformer } from '@commercetools-test-data/core';
import type {
  TCustomApplicationSubmenuLinkDraft,
  TCustomApplicationSubmenuLinkDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TCustomApplicationSubmenuLinkDraft,
    TCustomApplicationSubmenuLinkDraft
  >('default', {
    buildFields: ['labelAllLocales'],
  }),
  graphql: Transformer<
    TCustomApplicationSubmenuLinkDraft,
    TCustomApplicationSubmenuLinkDraftGraphql
  >('graphql', {
    buildFields: ['labelAllLocales'],
  }),
};

export default transformers;

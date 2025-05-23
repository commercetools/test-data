import { Transformer } from '@/core';
import type { TCustomApplicationSubmenuLinkDraft } from '../types';

const transformers = {
  default: Transformer<
    TCustomApplicationSubmenuLinkDraft,
    TCustomApplicationSubmenuLinkDraft
  >('default', {
    buildFields: ['labelAllLocales'],
  }),
  graphql: Transformer<
    TCustomApplicationSubmenuLinkDraft,
    TCustomApplicationSubmenuLinkDraft
  >('graphql', {
    buildFields: ['labelAllLocales'],
  }),
};

export default transformers;

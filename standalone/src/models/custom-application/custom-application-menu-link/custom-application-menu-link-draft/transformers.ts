import { Transformer } from '@/core';
import { TCustomApplicationMenuLinkDraft } from '../types';

const transformers = {
  default: Transformer<
    TCustomApplicationMenuLinkDraft,
    TCustomApplicationMenuLinkDraft
  >('default', {
    buildFields: ['labelAllLocales'],
  }),
  graphql: Transformer<
    TCustomApplicationMenuLinkDraft,
    TCustomApplicationMenuLinkDraft
  >('graphql', {
    buildFields: ['labelAllLocales'],
  }),
};

export default transformers;

import { Transformer } from '@commercetools-test-data/core';
import type { TCustomApplicationPermissionDraft } from './types';

const transformers = {
  default: Transformer<
    TCustomApplicationPermissionDraft,
    TCustomApplicationPermissionDraft
  >('default', {}),
  graphql: Transformer<
    TCustomApplicationPermissionDraft,
    TCustomApplicationPermissionDraft
  >('graphql', {}),
};

export default transformers;

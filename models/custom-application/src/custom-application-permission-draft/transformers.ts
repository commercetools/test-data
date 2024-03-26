import { Transformer } from '@commercetools-test-data/core';
import type {
  TCustomApplicationPermissionDraft,
  TCustomApplicationPermissionDraftGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCustomApplicationPermissionDraft,
    TCustomApplicationPermissionDraft
  >('default', {}),
  graphql: Transformer<
    TCustomApplicationPermissionDraft,
    TCustomApplicationPermissionDraftGraphql
  >('graphql', {}),
};

export default transformers;

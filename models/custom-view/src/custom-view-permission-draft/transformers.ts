import { Transformer } from '@commercetools-test-data/core';
import type {
  TCustomViewPermissionDraft,
  TCustomViewPermissionDraftGraphql,
} from './types';

const transformers = {
  default: Transformer<TCustomViewPermissionDraft, TCustomViewPermissionDraft>(
    'default',
    {}
  ),
  graphql: Transformer<
    TCustomViewPermissionDraft,
    TCustomViewPermissionDraftGraphql
  >('graphql', {}),
};

export default transformers;

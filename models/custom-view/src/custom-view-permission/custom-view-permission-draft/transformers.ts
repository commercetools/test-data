import { Transformer } from '@commercetools-test-data/core';
import type { CustomViewPermissionDraft } from '../types';

const transformers = {
  default: Transformer<CustomViewPermissionDraft, CustomViewPermissionDraft>(
    'default',
    {}
  ),
  graphql: Transformer<CustomViewPermissionDraft, CustomViewPermissionDraft>(
    'graphql',
    {}
  ),
};

export default transformers;

import { Transformer } from '@commercetools-test-data/core';
import type { CustomViewDraft } from '../types';

const transformers = {
  default: Transformer<CustomViewDraft, CustomViewDraft>('default', {}),
  graphql: Transformer<CustomViewDraft, CustomViewDraft>('graphql', {}),
};

export default transformers;

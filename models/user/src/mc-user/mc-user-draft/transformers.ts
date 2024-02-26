import { Transformer } from '@commercetools-test-data/core';
import type { TMcUserDraft } from '../types';

const transformers = {
  default: Transformer<TMcUserDraft, TMcUserDraft>('default', {}),
  rest: Transformer<TMcUserDraft, TMcUserDraft>('rest', {}),
  graphql: Transformer<TMcUserDraft, TMcUserDraft>('graphql', {}),
};

export default transformers;

import { Transformer } from '@commercetools-test-data/core';
import type { TMcUserDraft, TMcUserDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TMcUserDraft, TMcUserDraft>('default', {}),
  rest: Transformer<TMcUserDraft, TMcUserDraft>('rest', {}),
  graphql: Transformer<TMcUserDraft, TMcUserDraftGraphql>('graphql', {}),
};

export default transformers;

import { Transformer } from '../../../../core';
import type { TMcUserDraft } from '../types';

const transformers = {
  default: Transformer<TMcUserDraft, TMcUserDraft>('default', {}),
  rest: Transformer<TMcUserDraft, TMcUserDraft>('rest', {}),
  graphql: Transformer<TMcUserDraft, TMcUserDraft>('graphql', {}),
};

export default transformers;

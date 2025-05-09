import { Transformer } from '../../../../core';
import type { TUserDraft } from '../types';

const transformers = {
  default: Transformer<TUserDraft, TUserDraft>('default', {}),
  rest: Transformer<TUserDraft, TUserDraft>('rest', {}),
  graphql: Transformer<TUserDraft, TUserDraft>('graphql', {}),
};

export default transformers;

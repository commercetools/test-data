import { Transformer } from '@/core';
import type { TAddressDraft, TAddressDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TAddressDraft, TAddressDraft>('default', {}),
  rest: Transformer<TAddressDraft, TAddressDraft>('rest', {}),
  graphql: Transformer<TAddressDraft, TAddressDraftGraphql>('graphql', {}),
};

export default transformers;

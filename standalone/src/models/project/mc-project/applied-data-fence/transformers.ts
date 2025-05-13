import { Transformer } from '@/core';
import type { TAppliedDataFence, TAppliedDataFenceGraphql } from './types';

const transformers = {
  default: Transformer<TAppliedDataFence, TAppliedDataFence>('default', {}),
  rest: Transformer<TAppliedDataFence, TAppliedDataFence>('rest', {}),
  graphql: Transformer<TAppliedDataFence, TAppliedDataFenceGraphql>('graphql', {
    addFields: () => ({
      __typename: 'AppliedDataFence',
    }),
  }),
};

export default transformers;

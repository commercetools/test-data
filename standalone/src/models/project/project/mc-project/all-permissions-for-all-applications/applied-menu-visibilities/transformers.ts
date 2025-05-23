import { Transformer } from '@/core';
import type {
  TAppliedMenuVisibilities,
  TAppliedMenuVisibilitiesGraphql,
} from './types';

const transformers = {
  default: Transformer<TAppliedMenuVisibilities, TAppliedMenuVisibilities>(
    'default',
    {}
  ),
  rest: Transformer<TAppliedMenuVisibilities, TAppliedMenuVisibilities>(
    'rest',
    {}
  ),
  graphql: Transformer<
    TAppliedMenuVisibilities,
    TAppliedMenuVisibilitiesGraphql
  >('graphql', {
    addFields: () => ({
      __typename: 'AppliedMenuVisibilities',
    }),
  }),
};

export default transformers;

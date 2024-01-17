import { Transformer } from '@commercetools-test-data/core';
import type {
  TAppliedMenuVisibilities,
  TAppliedMenuVisibilitiesGraphql,
} from './types';

const transformers = {
  default: Transformer<TAppliedMenuVisibilities, TAppliedMenuVisibilities>(
    'default',
    {}
  ),
  rest: Transformer<TAppliedMenuVisibilities, TAppliedMenuVisibilitiesGraphql>(
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

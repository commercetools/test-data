import type { TReference, TReferenceGraphql } from './types';
import { Transformer } from '@commercetools-test-data/core';

const transformers = {
  // we do not add the expanded object ourselves
  // since some fields are pure `*Ref`, e.g `channelsRef`
  // with no option to expand.
  graphql: Transformer<TReference, TReferenceGraphql>('graphql', {
    addFields: () => ({
      __typename: 'Reference',
    }),
  }),
};

export default transformers;

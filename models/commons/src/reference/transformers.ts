import type { TReference, TReferenceGraphql, TReferenceRest } from './types';
import omit from 'lodash/omit';
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
  rest: Transformer<TReferenceRest, TReferenceRest>('rest', {
    replaceFields: ({ fields }) => ({
      ...fields,
      obj: omit(fields, ['typeId']),
    }),
  }),
};

export default transformers;

import { Transformer } from '@commercetools-test-data/core';
import omit from 'lodash/omit';
import type { TReference, TReferenceGraphql, TReferenceRest } from './types';

const transformers = {
  default: Transformer<TReference, TReference>('default', {}),
  rest: Transformer<TReference, TReferenceRest>('rest', {
    buildFields: false,
    replaceFields: ({ fields }) => ({
      ...fields,
      obj: omit(fields, ['typeId']),
    }),
  }),
  // we do not add the expanded object ourselves
  // since some fields are pure `*Ref`, e.g `channelsRef`
  // with no option to expand.
  graphql: Transformer<TReference, TReferenceGraphql>('graphql', {
    buildFields: false,
    addFields: () => ({
      __typename: 'Reference',
    }),
  }),
};

export default transformers;

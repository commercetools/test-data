import { Transformer } from '@commercetools-test-data/core';
import omit from 'lodash/omit';
import type {
  TExpandedReferenceObject,
  TReference,
  TReferenceGraphql,
  TReferenceRest,
} from './types';

const transformers = {
  default: Transformer<TReference, TReference>('default', {}),
  rest: Transformer<TReference, TReferenceRest>('rest', {
    buildFields: ['obj'],
    replaceFields: ({ fields }) => {
      return {
        ...fields,
        obj:
          (fields.obj as TExpandedReferenceObject) || omit(fields, ['typeId']),
      };
    },
  }),
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

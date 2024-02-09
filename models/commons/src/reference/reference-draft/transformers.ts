import { Transformer } from '@commercetools-test-data/core';
import omit from 'lodash/omit';
import type {
  TReferenceDraft,
  TReferenceDraftGraphql,
  TReferenceRest,
} from '../types';

const transformers = {
  default: Transformer<TReferenceDraft, TReferenceDraft>('default', {}),
  rest: Transformer<TReferenceDraft, TReferenceRest>('rest', {
    replaceFields: ({ fields }) => ({
      ...fields,
      obj: omit(fields, ['typeId']),
    }),
  }),
  // we do not add the expanded object ourselves
  // since some fields are pure `*Ref`, e.g `channelsRef`
  // with no option to expand.
  graphql: Transformer<TReferenceDraft, TReferenceDraftGraphql>('graphql', {}),
};

export default transformers;

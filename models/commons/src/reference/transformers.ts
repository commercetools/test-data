import { Transformer } from '@commercetools-test-data/core';
import type {
  TExpandedReferenceObject,
  TReference,
  TReferenceGraphql,
  TReferenceRest,
} from './types';

const transformers = {
  default: Transformer<TReference, TReference>('default', {
    buildFields: ['obj'],
  }),
  rest: Transformer<TReference, TReferenceRest>('rest', {
    buildFields: [],
    replaceFields: ({ fields }) => {
      const obj = fields.obj
        ? fields.obj.buildRest<TExpandedReferenceObject>()
        : {
            id: fields.id,
          };
      return {
        ...fields,
        id: obj.id,
        obj,
      };
    },
  }),
  // we do not add the expanded object ourselves
  // since some fields are pure `*Ref`, e.g `channelsRef`
  // with no option to expand.
  graphql: Transformer<TReference, TReferenceGraphql>('graphql', {
    buildFields: [],
    replaceFields: ({ fields }) => {
      const id = fields.obj
        ? fields.obj.buildGraphql<TExpandedReferenceObject>().id
        : fields.id;

      return {
        id,
        typeId: fields.typeId,
        __typename: 'Reference',
      };
    },
  }),
};

export default transformers;

import { Transformer } from '@commercetools-test-data/core';
import {
  TAttributeReferenceTypeDraftGraphql,
  TAttributeReferenceTypeDraft,
} from '../types';

const transformers = {
  default: Transformer<
    TAttributeReferenceTypeDraft,
    TAttributeReferenceTypeDraft
  >('default', {
    buildFields: [],
  }),
  graphql: Transformer<
    TAttributeReferenceTypeDraft,
    TAttributeReferenceTypeDraftGraphql
  >('graphql', {
    replaceFields: ({ fields }) => {
      return {
        [fields.name]: {
          referenceTypeId: fields.referenceTypeId,
        },
      };
    },
  }),
};

export default transformers;

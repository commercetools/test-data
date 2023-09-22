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
    buildFields: [],
  }),
};

export default transformers;

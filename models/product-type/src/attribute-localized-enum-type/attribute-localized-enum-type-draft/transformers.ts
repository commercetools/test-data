import { Transformer } from '@commercetools-test-data/core';
import {
  TAttributeLocalizedEnumTypeDraftGraphql,
  TAttributeLocalizedEnumTypeDraft,
} from '../types';

const transformers = {
  default: Transformer<
    TAttributeLocalizedEnumTypeDraft,
    TAttributeLocalizedEnumTypeDraft
  >('default', {
    buildFields: ['values'],
  }),
  graphql: Transformer<
    TAttributeLocalizedEnumTypeDraft,
    TAttributeLocalizedEnumTypeDraftGraphql
  >('graphql', {
    buildFields: ['values'],
  }),
};

export default transformers;

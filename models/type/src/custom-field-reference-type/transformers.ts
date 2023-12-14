import { Transformer } from '@commercetools-test-data/core';
import {
  TCustomFieldReferenceTypeGraphql,
  TCustomFieldReferenceType,
} from './types';

const transformers = {
  default: Transformer<TCustomFieldReferenceType, TCustomFieldReferenceType>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TCustomFieldReferenceType, TCustomFieldReferenceType>(
    'rest',
    {
      buildFields: [],
    }
  ),
  graphql: Transformer<
    TCustomFieldReferenceType,
    TCustomFieldReferenceTypeGraphql
  >('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'ReferenceCustomFieldType',
    }),
  }),
};

export default transformers;

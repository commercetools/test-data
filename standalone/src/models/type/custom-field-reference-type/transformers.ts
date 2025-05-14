import { Transformer } from '@/core';
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
      __typename: 'ReferenceType',
    }),
  }),
};

export default transformers;

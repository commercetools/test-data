import { Transformer } from '@/core';
import {
  TCustomFieldBooleanTypeGraphql,
  TCustomFieldBooleanType,
} from './types';

const transformers = {
  default: Transformer<TCustomFieldBooleanType, TCustomFieldBooleanType>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TCustomFieldBooleanType, TCustomFieldBooleanType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TCustomFieldBooleanType, TCustomFieldBooleanTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'BooleanType',
      }),
    }
  ),
};

export default transformers;

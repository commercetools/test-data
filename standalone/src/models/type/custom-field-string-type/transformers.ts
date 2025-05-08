import { Transformer } from '../../../core';
import { TCustomFieldStringTypeGraphql, TCustomFieldStringType } from './types';

const transformers = {
  default: Transformer<TCustomFieldStringType, TCustomFieldStringType>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TCustomFieldStringType, TCustomFieldStringType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TCustomFieldStringType, TCustomFieldStringTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'StringType',
      }),
    }
  ),
};

export default transformers;

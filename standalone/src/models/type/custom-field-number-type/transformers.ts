import { Transformer } from '../../../core';
import { TCustomFieldNumberTypeGraphql, TCustomFieldNumberType } from './types';

const transformers = {
  default: Transformer<TCustomFieldNumberType, TCustomFieldNumberType>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TCustomFieldNumberType, TCustomFieldNumberType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TCustomFieldNumberType, TCustomFieldNumberTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'NumberType',
      }),
    }
  ),
};

export default transformers;

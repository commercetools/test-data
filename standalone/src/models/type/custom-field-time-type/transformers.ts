import { Transformer } from '../../../core';
import { TCustomFieldTimeTypeGraphql, TCustomFieldTimeType } from './types';

const transformers = {
  default: Transformer<TCustomFieldTimeType, TCustomFieldTimeType>('default', {
    buildFields: [],
  }),
  rest: Transformer<TCustomFieldTimeType, TCustomFieldTimeType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TCustomFieldTimeType, TCustomFieldTimeTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'TimeType',
      }),
    }
  ),
};

export default transformers;

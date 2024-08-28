import { Transformer } from '@commercetools-test-data/core';
import type { TCustomFieldDateTypeGraphql, TCustomFieldDateType } from './types';

const transformers = {
  default: Transformer<TCustomFieldDateType, TCustomFieldDateType>('default', {
    buildFields: [],
  }),
  rest: Transformer<TCustomFieldDateType, TCustomFieldDateType>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TCustomFieldDateType, TCustomFieldDateTypeGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'DateCustomFieldType',
      }),
    }
  ),
};

export default transformers;

import { Transformer } from '@commercetools-test-data/core';
import {
  type TCustomFieldSetType,
  type TCustomFieldSetTypeGraphql,
} from './types';

const transformers = {
  default: Transformer<TCustomFieldSetType, TCustomFieldSetType>('default', {
    buildFields: ['elementType'],
  }),

  rest: Transformer<TCustomFieldSetType, TCustomFieldSetType>('rest', {
    buildFields: ['elementType'],
  }),
  graphql: Transformer<TCustomFieldSetType, TCustomFieldSetTypeGraphql>(
    'graphql',
    {
      buildFields: ['elementType'],
      addFields: () => ({
        __typename: 'SetCustomFieldType',
      }),
    }
  ),
};

export default transformers;

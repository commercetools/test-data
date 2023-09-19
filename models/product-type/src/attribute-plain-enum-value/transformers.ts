import { Transformer } from '@commercetools-test-data/core';
import {
  TAttributePlainEnumValue,
  TAttributePlainEnumValueGraphql,
} from './types';

const transformers = {
  default: Transformer<TAttributePlainEnumValue, TAttributePlainEnumValue>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TAttributePlainEnumValue, TAttributePlainEnumValue>(
    'rest',
    {
      buildFields: [],
    }
  ),
  graphql: Transformer<
    TAttributePlainEnumValue,
    TAttributePlainEnumValueGraphql
  >('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'AttributePlainEnumValue',
    }),
  }),
};

export default transformers;

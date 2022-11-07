import { Transformer } from '@commercetools-test-data/core';
import type { TEnumValue, TEnumValueGraphql } from './types';

const transformers = {
  default: Transformer<TEnumValue, TEnumValue>('default', {}),
  rest: Transformer<TEnumValue, TEnumValue>('rest', {}),
  graphql: Transformer<TEnumValue, TEnumValueGraphql>('graphql', {
    addFields: () => ({
      __typename: 'EnumValue',
    }),
  }),
};

export default transformers;

import { Transformer } from '@commercetools-test-data/core';
import { TPlainEnumValue, TPlainEnumValueGraphql } from './types';

const transformers = {
  default: Transformer<TPlainEnumValue, TPlainEnumValue>('default', {
    buildFields: [],
  }),
  rest: Transformer<TPlainEnumValue, TPlainEnumValue>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TPlainEnumValue, TPlainEnumValueGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'PlainEnumValue',
    }),
  }),
};

export default transformers;

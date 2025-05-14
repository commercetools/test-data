import { Transformer } from '@/core';
import { TEnumValue, TEnumValueGraphql } from './types';

const transformers = {
  default: Transformer<TEnumValue, TEnumValue>('default', {
    buildFields: [],
  }),
  rest: Transformer<TEnumValue, TEnumValue>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TEnumValue, TEnumValueGraphql>('graphql', {
    addFields: () => ({
      __typename: 'EnumValue',
    }),
  }),
};

export default transformers;

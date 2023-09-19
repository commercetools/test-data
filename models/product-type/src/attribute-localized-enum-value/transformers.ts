import { Transformer } from '@commercetools-test-data/core';
import {
  type TAttributeLocalizedEnumValue,
  type TAttributeLocalizedEnumValueGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TAttributeLocalizedEnumValue,
    TAttributeLocalizedEnumValue
  >('default', { buildFields: ['label'] }),

  rest: Transformer<TAttributeLocalizedEnumValue, TAttributeLocalizedEnumValue>(
    'rest',
    { buildFields: ['label'] }
  ),
  graphql: Transformer<
    TAttributeLocalizedEnumValue,
    TAttributeLocalizedEnumValueGraphql
  >('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'AttributeLocalizedEnumValue',
    }),
  }),
};

export default transformers;

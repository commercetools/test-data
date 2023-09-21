import { Transformer } from '@commercetools-test-data/core';
import {
  type TAttributeLocalizableTextType,
  type TAttributeLocalizableTextTypeGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TAttributeLocalizableTextType,
    TAttributeLocalizableTextType
  >('default', { buildFields: [] }),

  rest: Transformer<
    TAttributeLocalizableTextType,
    TAttributeLocalizableTextType
  >('rest', { buildFields: [] }),
  graphql: Transformer<
    TAttributeLocalizableTextType,
    TAttributeLocalizableTextTypeGraphql
  >('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'AttributeLocalizableTextType',
    }),
  }),
};

export default transformers;

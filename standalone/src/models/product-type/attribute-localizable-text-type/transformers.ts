import { Transformer } from '../../../core';
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
      __typename: 'LocalizableTextAttributeDefinitionType',
    }),
  }),
};

export default transformers;

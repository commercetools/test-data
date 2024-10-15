import { Transformer, buildField } from '@commercetools-test-data/core';
import {
  TAttributeLocalizedEnumTypeDraftGraphql,
  TAttributeLocalizedEnumTypeDraft,
} from '../types';

const transformers = {
  default: Transformer<
    TAttributeLocalizedEnumTypeDraft,
    TAttributeLocalizedEnumTypeDraft
  >('default', {
    buildFields: ['values'],
  }),
  graphql: Transformer<
    TAttributeLocalizedEnumTypeDraft,
    TAttributeLocalizedEnumTypeDraftGraphql
  >('graphql', {
    replaceFields: ({ fields }) => {
      return {
        [fields.name]: {
          values: fields.values.map((value) => buildField(value, 'graphql')),
        },
      };
    },
  }),
};

export default transformers;

import { Transformer } from '@/core';
import {
  TAttributeLocalizableTextTypeDraft,
  TAttributeLocalizableTextTypeDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TAttributeLocalizableTextTypeDraft,
    TAttributeLocalizableTextTypeDraft
  >('default', {
    buildFields: [],
  }),
  graphql: Transformer<
    TAttributeLocalizableTextTypeDraft,
    TAttributeLocalizableTextTypeDraftGraphql
  >('graphql', {
    buildFields: [],
    replaceFields: ({ fields }) => ({
      [fields.name]: {
        dummy: null,
      },
    }),
  }),
};

export default transformers;

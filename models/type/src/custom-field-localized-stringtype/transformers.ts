import { Transformer } from '@commercetools-test-data/core';
import {
  type TCustomFieldLocalizedStringType,
  type TCustomFieldLocalizedStringTypeGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCustomFieldLocalizedStringType,
    TCustomFieldLocalizedStringType
  >('default', { buildFields: [] }),

  rest: Transformer<
    TCustomFieldLocalizedStringType,
    TCustomFieldLocalizedStringType
  >('rest', { buildFields: [] }),
  graphql: Transformer<
    TCustomFieldLocalizedStringType,
    TCustomFieldLocalizedStringTypeGraphql
  >('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'LocalizedStringType',
    }),
  }),
};

export default transformers;

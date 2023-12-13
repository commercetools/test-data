import { Transformer } from '@commercetools-test-data/core';
import {
  type TCustomFieldLocalizedStringtype,
  type TCustomFieldLocalizedStringtypeGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCustomFieldLocalizedStringtype,
    TCustomFieldLocalizedStringtype
  >('default', { buildFields: [] }),

  rest: Transformer<
    TCustomFieldLocalizedStringtype,
    TCustomFieldLocalizedStringtype
  >('rest', { buildFields: [] }),
  graphql: Transformer<
    TCustomFieldLocalizedStringtype,
    TCustomFieldLocalizedStringtypeGraphql
  >('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'LocalizableStringtypeCustomFieldType',
    }),
  }),
};

export default transformers;

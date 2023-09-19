import { Transformer } from '@commercetools-test-data/core';
import {
  type TAttributeLocalizedString,
  type TAttributeLocalizedStringGraphql,
} from './types';

const transformers = {
  default: Transformer<TAttributeLocalizedString, TAttributeLocalizedString>(
    'default',
    { buildFields: [] }
  ),

  rest: Transformer<TAttributeLocalizedString, TAttributeLocalizedString>(
    'rest',
    { buildFields: [] }
  ),
  graphql: Transformer<
    TAttributeLocalizedString,
    TAttributeLocalizedStringGraphql
  >('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'LocalizableTextAttributeDefinitionType',
    }),
  }),
};

export default transformers;

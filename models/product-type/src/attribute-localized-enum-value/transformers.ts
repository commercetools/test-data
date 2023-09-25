import { LocalizedString } from '@commercetools-test-data/commons';
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
    removeFields: ['label'],
    addFields: ({ fields }) => ({
      labelAllLocales: LocalizedString.toLocalizedField(fields.label),
      __typename: 'LocalizableEnumValueType',
    }),
  }),
};

export default transformers;

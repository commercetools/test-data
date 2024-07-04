import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import {
  type TCustomFieldLocalizedEnumValue,
  type TCustomFieldLocalizedEnumValueGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCustomFieldLocalizedEnumValue,
    TCustomFieldLocalizedEnumValue
  >('default', { buildFields: ['label'] }),
  rest: Transformer<
    TCustomFieldLocalizedEnumValue,
    TCustomFieldLocalizedEnumValue
  >('rest', { buildFields: ['label'] }),
  graphql: Transformer<
    TCustomFieldLocalizedEnumValue,
    TCustomFieldLocalizedEnumValueGraphql
  >('graphql', {
    buildFields: [],
    removeFields: ['label'],
    addFields: ({ fields }) => ({
      labelAllLocales: LocalizedString.toLocalizedField(fields.label),
      __typename: 'LocalizedEnumValue',
    }),
  }),
};

export default transformers;

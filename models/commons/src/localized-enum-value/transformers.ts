import { Transformer, buildField } from '@commercetools-test-data/core';
import { TLocalizedEnumValue, TLocalizedEnumValueGraphql } from './types';

const transformers = {
  default: Transformer<TLocalizedEnumValue, TLocalizedEnumValue>('default', {
    buildFields: ['label'],
  }),
  rest: Transformer<TLocalizedEnumValue, TLocalizedEnumValue>('rest', {
    buildFields: ['label'],
  }),
  graphql: Transformer<TLocalizedEnumValue, TLocalizedEnumValueGraphql>(
    'graphql',
    {
      replaceFields: ({ fields }) => ({
        __typename: 'LocalizedEnumValue',
        key: fields.key,
        labelAllLocales: buildField(fields.label, 'graphql', {
          fieldToBuild: 'label',
        }),
        label: buildField(fields.label, 'rest', {
          fieldToBuild: 'label',
        }).en,
      }),
    }
  ),
};

export default transformers;

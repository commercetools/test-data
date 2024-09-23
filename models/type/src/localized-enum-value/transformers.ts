import {
  LocalizedString,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';

import { TLocalizedEnumValue, TLocalizedEnumValueGraphql } from './types';

const transformers = {
  default: Transformer<TLocalizedEnumValue, TLocalizedEnumValue>('default', {
    buildFields: [],
  }),
  rest: Transformer<TLocalizedEnumValue, TLocalizedEnumValue>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TLocalizedEnumValue, TLocalizedEnumValueGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: ({ fields }) => ({
        labelAllLocales: LocalizedString.random()
          .locale('en')
          .value(fields.label)
          .buildGraphql<TLocalizedStringGraphql>(),
        __typename: 'LocalizedEnumValue',
      }),
    }
  ),
};

export default transformers;

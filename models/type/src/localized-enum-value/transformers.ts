import { LocalizedField } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import { TLocalizedFieldGraphql } from './../../../commons/src/localized-field/types';

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
        labelAllLocales: [
          LocalizedField.random()
            .locale('en')
            .value(fields.label)
            .buildGraphql<TLocalizedFieldGraphql>(),
        ],
        __typename: 'LocalizedEnumValue',
      }),
    }
  ),
};

export default transformers;

import type { TLocalizedString, TLocalizedStringGraphql } from './types';

import { Transformer } from '@commercetools-test-data/core';

const transformers = {
  graphql: Transformer<TLocalizedString, TLocalizedStringGraphql>('graphql', {
    replaceFields: ({ fields }) =>
      Object.entries(fields).map(([locale, value]) => ({
        locale,
        value,
        __typename: 'LocalizedString',
      })),
  }),
};

export default transformers;

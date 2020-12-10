import type { TLocalizedString, TLocalizedStringGraphql } from './types';
import { Transformer } from '@commercetools-test-data/core';

const isNil = (value: string | undefined) =>
  value === undefined || value === null;

const transformers = {
  graphql: Transformer<TLocalizedString, TLocalizedStringGraphql>('graphql', {
    replaceFields: ({ fields }) =>
      Object.entries(fields)
        .filter(([, value]) => !isNil(value))
        .map(([locale, value]) => ({
          locale,
          value,
          __typename: 'LocalizedString',
        })),
  }),
};

export default transformers;

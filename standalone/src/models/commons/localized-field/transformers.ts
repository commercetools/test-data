import { Transformer } from '../../../core';
import type { TLocalizedField, TLocalizedFieldGraphql } from './types';

const transformers = {
  default: Transformer<TLocalizedField, TLocalizedField>('default', {}),
  graphql: Transformer<TLocalizedField, TLocalizedFieldGraphql>('graphql', {
    addFields: () => ({
      __typename: 'LocalizedField',
    }),
  }),
};

export default transformers;

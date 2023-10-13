import { Transformer } from '@commercetools-test-data/core';
import type { TLocalizedField } from './types';

const transformers = {
  default: Transformer<TLocalizedField, TLocalizedField>('default', {}),
  graphql: Transformer<TLocalizedField, TLocalizedField>('graphql', {}),
};

export default transformers;

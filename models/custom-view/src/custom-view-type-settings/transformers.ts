import { Transformer } from '@commercetools-test-data/core';
import type { CustomViewTypeSettings } from './types';

const transformers = {
  default: Transformer<CustomViewTypeSettings, CustomViewTypeSettings>(
    'default',
    {}
  ),
  graphql: Transformer<CustomViewTypeSettings, CustomViewTypeSettings>(
    'graphql',
    {}
  ),
};

export default transformers;

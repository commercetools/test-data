import { Transformer } from '@commercetools-test-data/core';
import type { CustomViewPermission } from './types';

const transformers = {
  default: Transformer<CustomViewPermission, CustomViewPermission>(
    'default',
    {}
  ),
  graphql: Transformer<CustomViewPermission, CustomViewPermission>(
    'graphql',
    {}
  ),
};

export default transformers;

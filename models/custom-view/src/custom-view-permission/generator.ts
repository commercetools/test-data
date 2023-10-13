import { Generator } from '@commercetools-test-data/core';
import { CustomViewPermission } from './types';

const generator = Generator<CustomViewPermission>({
  fields: {
    name: '',
    oAuthScopes: [],
  },
});

export default generator;

import { Generator } from '@commercetools-test-data/core';
import { CustomViewPermissionDraft } from '../types';

const generator = Generator<CustomViewPermissionDraft>({
  fields: {
    name: null,
    oAuthScopes: [],
  },
});

export default generator;

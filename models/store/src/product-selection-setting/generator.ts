import { Generator, fake } from '@commercetools-test-data/core';
import type { TProductSelectionSetting } from './types';

// https://docs.commercetools.com/api/projects/stores#productselectionsetting

const generator = Generator<TProductSelectionSetting>({
  fields: {
    productSelection: //TODO,
    active: fake((f) => f.datatype.boolean()),
  },
});

export default generator;

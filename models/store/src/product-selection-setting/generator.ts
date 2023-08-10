import { Generator, fake } from '@commercetools-test-data/core';
import { ProductSelection } from '@commercetools-test-data/product-selection';
import type { TProductSelectionSetting } from './types';

// https://docs.commercetools.com/api/projects/stores#productselectionsetting

// Rest takes productSelectionId, while graphql can take both productSelectionReference & the productSelection object.
// The distinction is handled in the transformers.

const generator = Generator<TProductSelectionSetting>({
  fields: {
    productSelection: fake(() => ProductSelection.random()),
    active: fake((f) => f.datatype.boolean()),
  },
});

export default generator;

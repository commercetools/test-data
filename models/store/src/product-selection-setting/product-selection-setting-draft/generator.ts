import { Reference } from '@commercetools-test-data/commons';
import { Generator, fake } from '@commercetools-test-data/core';
import type { TProductSelectionSettingDraft } from '../types';

// https://docs.commercetools.com/api/projects/stores#productselectionsettingdraft

const generator = Generator<TProductSelectionSettingDraft>({
  fields: {
    productSelection: fake(() =>
      Reference.random().typeId('product-selection')
    ),
    active: fake((f) => f.datatype.boolean()),
  },
});

export default generator;

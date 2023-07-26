import { Generator, fake } from '@commercetools-test-data/core';
import type { TProductSelectionSettingDraft } from '../types';

// https://docs.commercetools.com/api/projects/stores#productselectionsettingdraft

const generator = Generator<TProductSelectionSettingDraft>({
  fields: {
    productSelection: //TODO,
    active: fake((f) => f.datatype.boolean()),
  },
});

export default generator;

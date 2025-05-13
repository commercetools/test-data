import { Generator, fake } from '@/core';
import { Reference } from '@/models/commons';
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

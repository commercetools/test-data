import { Generator, fake } from '@/core';
import { TaxRateDraft } from '../../tax-rate/tax-rate-draft';
import type { TTaxCategoryDraft } from '../types';

// https://docs.commercetools.com/api/projects/taxCategories#taxcategorydraft

const generator = Generator<TTaxCategoryDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake((f) => f.lorem.words(2)),
    description: fake((f) => f.lorem.sentence()),
    rates: fake(() => [TaxRateDraft.random()]),
  },
});

export default generator;

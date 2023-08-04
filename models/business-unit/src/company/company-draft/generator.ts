import { fake, Generator } from '@commercetools-test-data/core';
import type { TCompanyDraft } from '../types';

// https://docs.commercetools.com/api/projects/business-units#companydraft

const generator = Generator<TCompanyDraft>({
  fields: {
    // Business unit fields
    key: fake((f) => f.lorem.slug(2)),
    name: fake((f) => f.lorem.words(2)),
    // Company fields
    unitType: 'Company',
  },
});

export default generator;

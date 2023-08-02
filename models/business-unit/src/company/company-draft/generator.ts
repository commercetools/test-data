import { fake, Generator } from '@commercetools-test-data/core';
import type { TCompanyDraft } from '../types';

// https://docs.commercetools.com/api/projects/business-units#companydraft

const generator = Generator<TCompanyDraft>({
  fields: {
    unitType: 'Company',
    // TODO: investigate these 2 fields and why they are required but not in the docs as such
    key: fake((f) => f.lorem.slug(2)),
    name: fake((f) => f.lorem.words(2)),
  },
});

export default generator;

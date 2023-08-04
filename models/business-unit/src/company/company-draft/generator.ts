import { Generator } from '@commercetools-test-data/core';
import type { TCompanyDraft } from '../types';

// https://docs.commercetools.com/api/projects/business-units#companydraft

const generator = Generator<TCompanyDraft>({
  fields: {
    // BusinessUnit properties that are required by the sdk due to the relationship between BusinessUnit and Company
    key: null,
    name: null,
    // CompanyDraft
    unitType: 'Company',
  },
});

export default generator;

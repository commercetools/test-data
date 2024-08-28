import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TDiscountCodeDraft } from '../types';

// https://docs.commercetools.com/api/projects/discountCodes#discountcodedraft

// eslint-disable-next-line
const [getValidFrom, _, getValidUntil] = createRelatedDates();

const generator = Generator<TDiscountCodeDraft>({
  fields: {
    key: fake((f) => f.string.alphanumeric({ length: { min: 2, max: 256 } })),
    name: fake(() => LocalizedStringDraft.random()),
    description: fake(() => LocalizedStringDraft.random()),
    code: fake((f) => f.string.alphanumeric({ length: 20 })),
    cartDiscounts: [],
    cartPredicate: '1=1',
    isActive: fake((f) => f.datatype.boolean()),
    maxApplications: fake((f) => f.number.int({ min: 11, max: 30 })),
    maxApplicationsPerCustomer: fake((f) => f.number.int({ min: 1, max: 10 })),
    groups: [],
    validFrom: fake(getValidFrom),
    validUntil: fake(getValidUntil),
    custom: null,
  },
});

export default generator;

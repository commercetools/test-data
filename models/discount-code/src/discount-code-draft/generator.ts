import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TDiscountCodeDraft } from '../types';

// https://docs.commercetools.com/api/projects/discountCodes#discountcodedraft

// eslint-disable-next-line
const [getValidFrom, _, getValidUntil] = createRelatedDates();

const generator = Generator<TDiscountCodeDraft>({
  fields: {
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    code: fake((f) => f.random.word()),
    cartDiscounts: [],
    cartPredicate: '1=1',
    isActive: fake((f) => f.datatype.boolean()),
    maxApplications: fake((f) => f.datatype.number({ min: 1, max: 30 })),
    maxApplicationsPerCustomer: fake((f) =>
      f.datatype.number({ min: 1, max: 30 })
    ),
    groups: [],
    validFrom: fake(getValidFrom),
    validUntil: fake(getValidUntil),
    custom: null,
  },
});

export default generator;

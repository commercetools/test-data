import { fake, Generator } from '../../../core';
import { createRelatedDates } from '../../../utils';
import { LocalizedStringDraft } from '../../commons';
import { TDiscountCodeDraft } from '../types';

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

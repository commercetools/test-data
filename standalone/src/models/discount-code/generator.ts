import { fake, Generator, sequence } from '../../core';
import { createRelatedDates } from '../../utils';
import {
  ClientLogging,
  LocalizedString,
} from '../commons';
import { TDiscountCode } from './types';

// https://docs.commercetools.com/api/projects/discountCodes#discountcode

// eslint-disable-next-line
const [getValidFrom, _, getValidUntil] = createRelatedDates();
const [getCreatedAt, getLastModifiedAt] = createRelatedDates();

const generator = Generator<TDiscountCode>({
  fields: {
    id: fake((f) => f.string.alphanumeric(8)),
    key: fake((f) => f.string.alphanumeric({ length: { min: 2, max: 256 } })),
    version: sequence(),
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    code: fake((f) => f.lorem.word()),
    cartDiscounts: [],
    cartPredicate: '1=1',
    isActive: fake((f) => f.datatype.boolean()),
    references: [],
    maxApplications: fake((f) => f.number.int({ min: 1, max: 30 })),
    maxApplicationsPerCustomer: fake((f) => f.number.int({ min: 1, max: 30 })),
    groups: [],
    validFrom: fake(getValidFrom),
    validUntil: fake(getValidUntil),
    applicationVersion: fake((f) => f.number.int()),
    custom: null,
    createdAt: fake(getCreatedAt),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getLastModifiedAt),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;

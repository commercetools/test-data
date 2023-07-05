import {
  ClientLogging,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { fake, Generator, sequence } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import * as CartDiscountValueAbsolute from '../cart-discount-value-absolute';
import * as CartDiscountValueFixed from '../cart-discount-value-fixed';
import * as CartDiscountValueGiftLineItem from '../cart-discount-value-gift-line-item';
import * as CartDiscountValueRelative from '../cart-discount-value-relative';
import { stackingMode } from './constants';
import { TCartDiscount } from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscount

// eslint-disable-next-line
const [getValidFrom, _, getValidUntil] = createRelatedDates();
const [getCreatedAt, getLastModifiedAt] = createRelatedDates();

const generator = Generator<TCartDiscount>({
  fields: {
    id: fake((f) => f.string.alphaNumeric(8)),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    value: fake((f) =>
      f.helpers.arrayElement([
        CartDiscountValueAbsolute.CartDiscountValueAbsoluteDraft.random(),
        CartDiscountValueFixed.CartDiscountValueFixedDraft.random(),
        CartDiscountValueGiftLineItem.CartDiscountValueGiftLineItemDraft.random(),
        CartDiscountValueRelative.CartDiscountValueRelativeDraft.random(),
      ])
    ),
    cartPredicate: '1=1',
    target: null,
    // Faker `min` and `max` bounds are inclusive, we need between 0 and 1
    sortOrder: fake((f) =>
      String(f.number.int()({ min: 0.00001, max: 0.99999 }))
    ),
    isActive: fake((f) => f.datatype.boolean()),
    validFrom: fake(getValidFrom),
    validUntil: fake(getValidUntil),
    requiresDiscountCode: fake((f) => f.datatype.boolean()),
    references: [],
    stackingMode: fake((f) =>
      f.helpers.arrayElement(Object.values(stackingMode))
    ),
    custom: null,
    createdAt: fake(getCreatedAt),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getLastModifiedAt),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;

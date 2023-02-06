import { fake, Generator, sequence } from '@commercetools-test-data/core';
import { TProductDiscount } from './types';
import {
  ClientLogging,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { createRelatedDates } from '@commercetools-test-data/utils';
import * as ProductDiscountValueAbsolute from '@commercetools-test-data/product-discount-value-absolute';
import * as ProductDiscountValueRelative from '@commercetools-test-data/product-discount-value-relative';
import * as ProductDiscountValueExternal from '@commercetools-test-data/product-discount-value-external';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscount

// eslint-disable-next-line
const [getValidFrom, _, getValidUntil] = createRelatedDates();
const [getCreatedAt, getLastModifiedAt] = createRelatedDates();

const generator = Generator<TProductDiscount>({
  fields: {
    id: fake((f) => f.random.alphaNumeric(8)),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    value: fake((f) =>
      f.helpers.arrayElement([
        ProductDiscountValueAbsolute.random(),
        ProductDiscountValueRelative.random(),
        ProductDiscountValueExternal.random(),
      ])
    ),
    predicate: '1=1',
    sortOrder: fake((f) => String(Math.random())),
    isActive: fake((f) => f.datatype.boolean()),
    references: [],
    validFrom: fake(getValidFrom),
    validUntil: fake(getValidUntil),
    createdAt: fake(getCreatedAt),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getLastModifiedAt),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;

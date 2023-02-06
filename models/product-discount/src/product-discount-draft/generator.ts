import { fake, Generator } from '@commercetools-test-data/core';
import { TProductDiscountDraft } from '../types';
import { LocalizedString } from '@commercetools-test-data/commons';
import { createRelatedDates } from '@commercetools-test-data/utils';
import * as ProductDiscountValueAbsolute from '@commercetools-test-data/product-discount-value-absolute';
import * as ProductDiscountValueRelative from '@commercetools-test-data/product-discount-value-relative';
import * as ProductDiscountValueExternal from '@commercetools-test-data/product-discount-value-external';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountdraft

// eslint-disable-next-line
const [getValidFrom, _, getValidUntil] = createRelatedDates();

const generator = Generator<TProductDiscountDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    value: fake((f) =>
      f.helpers.arrayElement([
        ProductDiscountValueAbsolute.ProductDiscountValueAbsoluteDraft.random(),
        ProductDiscountValueRelative.ProductDiscountValueRelativeDraft.random(),
        ProductDiscountValueExternal.ProductDiscountValueExternalDraft.random(),
      ])
    ),
    predicate: '1=1',
    sortOrder: fake((f) => String(Math.random())),
    isActive: fake((f) => f.datatype.boolean()),
    validFrom: fake(getValidFrom),
    validUntil: fake(getValidUntil),
  },
});

export default generator;

import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import * as ProductDiscountValueAbsoluteDraft from '../../product-discount-value-absolute';
import * as ProductDiscountValueExternalDraft from '../../product-discount-value-external';
import * as ProductDiscountValueRelativeDraft from '../../product-discount-value-relative';
import { TProductDiscountDraft } from '../types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountdraft

// eslint-disable-next-line
const [getValidFrom, _, getValidUntil] = createRelatedDates();

const generator = Generator<TProductDiscountDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedStringDraft.random()),
    description: fake(() => LocalizedStringDraft.random()),
    value: fake((f) =>
      f.helpers.arrayElement([
        ProductDiscountValueAbsoluteDraft.random(),
        ProductDiscountValueRelativeDraft.random(),
        ProductDiscountValueExternalDraft.random(),
      ])
    ),
    predicate: '1=1',
    // Faker `min` and `max` bounds are inclusive, we need between 0 and 1
    sortOrder: fake((f) =>
      String(f.number.float({ min: 0.00001, max: 0.99999 }))
    ),
    isActive: fake((f) => f.datatype.boolean()),
    validFrom: fake(getValidFrom),
    validUntil: fake(getValidUntil),
  },
});

export default generator;

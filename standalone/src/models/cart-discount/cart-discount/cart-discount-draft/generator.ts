import { fake, Generator } from '../../../../core';
import { createRelatedDates } from '../../../../utils';
import { LocalizedStringDraft } from '../../../commons';
import * as CartDiscountValueAbsolute from '../../cart-discount-value-absolute';
import * as CartDiscountValueFixed from '../../cart-discount-value-fixed';
import * as CartDiscountValueGiftLineItem from '../../cart-discount-value-gift-line-item';
import * as CartDiscountValueRelative from '../../cart-discount-value-relative';
import { stackingMode } from '../constants';
import type { TCartDiscountDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountdraft

// eslint-disable-next-line
const [getValidFrom, _, getValidUntil] = createRelatedDates();

const generator = Generator<TCartDiscountDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedStringDraft.random()),
    description: fake(() => LocalizedStringDraft.random()),
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
      String(f.number.float({ min: 0.00001, max: 0.99999 }))
    ),
    isActive: fake((f) => f.datatype.boolean()),
    validFrom: fake(getValidFrom),
    validUntil: fake(getValidUntil),
    requiresDiscountCode: fake((f) => f.datatype.boolean()),
    stackingMode: fake((f) =>
      f.helpers.arrayElement(Object.values(stackingMode))
    ),
    custom: null,
  },
});

export default generator;

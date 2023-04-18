import { CartDiscountLineItemsTargetDraft } from '@commercetools-test-data/cart-discount-target';
import { CartDiscountValueAbsoluteDraft } from '@commercetools-test-data/cart-discount-value-absolute';
import { CentPrecisionMoneyDraft } from '@commercetools-test-data/cent-precision-money';
import { LocalizedString } from '@commercetools-test-data/commons';
import {
  CustomerGroupDraft,
  TCustomerGroupDraft,
} from '@commercetools-test-data/customer-group';
import * as CartDiscountDraft from '../..';
import { stackingMode } from '../../../constants';
import { TCartDiscountDraftBuilder } from '../../../types';

const customerGroupDraft = CustomerGroupDraft.presets.sampleDataFashion
  .luxe()
  .build<TCustomerGroupDraft>();

const luxeSpend = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(
      CartDiscountValueAbsoluteDraft.random().money(
        CentPrecisionMoneyDraft.random()
          .currencyCode('EUR')
          .centAmount(3000)
          .fractionDigits(2)
      )
    )
    .cartPredicate(
      `totalPrice = "500.00 EUR" and customer.customerGroup.key = "${customerGroupDraft.key}"`
    )
    .target(CartDiscountLineItemsTargetDraft.random().predicate('1=1'))
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Luxe customers! Spend 500EUR and Save 30EUR')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('Luxe customers - Get 30 EUR back when you spend 500EUR')
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.876899')
    .key('LuxeSpend500Save30');

export default luxeSpend;

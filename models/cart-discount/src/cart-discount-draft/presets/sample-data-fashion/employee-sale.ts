import * as CartDiscountValueRelative from '@commercetools-test-data/cart-discount-value-relative';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as CartDiscountDraft from '../..';
import { TCartDiscountDraftBuilder } from '../../../types';

const employeeSale = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(CartDiscountValueRelative.random().type('relative').permyriad(1500))
    .cartPredicate('customer.customerGroup.key = "employee"')
    // TODO: create `target` model
    .target(undefined)
    .name(LocalizedString.presets.empty()['en-US']('Employee Sale'))
    .description(LocalizedString.presets.empty()['en-US']('employee_sale'))
    .stackingMode('Stacking')
    .isActive(true)
    .requiresDiscountCode(true)
    .sortOrder('0.8')
    .key('EmployeeSale');

export default employeeSale;

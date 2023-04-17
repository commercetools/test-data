import * as CartDiscountValueRelative from '@commercetools-test-data/cart-discount-value-relative';
import { LocalizedString } from '@commercetools-test-data/commons';
import {
  CustomerGroupDraft,
  TCustomerGroupDraft,
} from '@commercetools-test-data/customer-group';
import * as CartDiscountDraft from '../..';
import { TCartDiscountDraftBuilder } from '../../../types';

const customerGroupDraft = CustomerGroupDraft.presets.sampleDataFashion
  .employee()
  .build<TCustomerGroupDraft>();

const employeeSale = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(
      CartDiscountValueRelative.CartDiscountValueRelativeDraft.random()
        .type('relative')
        .permyriad(1500)
    )
    // TODO: integrate customer group preset key
    .cartPredicate(`customer.customerGroup.key = "${customerGroupDraft.key}"`)
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

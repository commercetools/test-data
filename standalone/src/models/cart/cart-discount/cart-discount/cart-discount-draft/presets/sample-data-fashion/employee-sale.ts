import { LocalizedStringDraft } from '../../../../../../commons';
import {
  CustomerGroupDraft,
  TCustomerGroupDraft,
} from '../../../../../../customer-group';
import {
  CartDiscountLineItemsTargetDraft,
  CartDiscountValueRelativeDraft,
} from '../../../../index';
import { stackingMode } from '../../../constants';
import type { TCartDiscountDraftBuilder } from '../../../types';
import * as CartDiscountDraft from '../../index';

const customerGroupDraft = CustomerGroupDraft.presets.sampleDataFashion
  .employee()
  .build<TCustomerGroupDraft>();

const employeeSale = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(CartDiscountValueRelativeDraft.random().permyriad(1500))
    .cartPredicate(`customer.customerGroup.key = "${customerGroupDraft.key}"`)
    .target(CartDiscountLineItemsTargetDraft.random().predicate(`1=1`))
    .name(LocalizedStringDraft.presets.empty()['en-US']('Employee Sale'))
    .description(LocalizedStringDraft.presets.empty()['en-US']('employee_sale'))
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(true)
    .sortOrder('0.8')
    .key('EmployeeSale');

export default employeeSale;

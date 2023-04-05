import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import * as DiscountCodeDraft from '../..';
import { TDiscountCodeDraftBuilder } from '../../../types';

const employeeSale = (): TDiscountCodeDraftBuilder =>
  DiscountCodeDraft.presets
    .empty()
    .code('emp15')
    .name(LocalizedString.presets.empty()['en-US']('Employee Sale'))
    .description(LocalizedString.presets.empty())
    // TODO: use the cart discount preset key here when available
    .cartDiscounts([
      Reference.random().key('EmployeeSale').typeId('cart-discount'),
    ])
    .isActive(true)
    .groups([]);

export default employeeSale;

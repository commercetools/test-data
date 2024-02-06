import {
  ReferenceDraft,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { TDiscountCodeDraftBuilder } from '../../../types';
import * as DiscountCodeDraft from '../../index';

const employeeSale = (cartDiscountId: string): TDiscountCodeDraftBuilder =>
  DiscountCodeDraft.presets
    .empty()
    .code('emp15')
    .name(LocalizedString.presets.empty()['en-US']('Employee Sale'))
    .description(LocalizedString.presets.empty())
    .cartDiscounts([
      ReferenceDraft.random().id(cartDiscountId).typeId('cart-discount'),
    ])
    .isActive(true)
    .groups([]);

export default employeeSale;

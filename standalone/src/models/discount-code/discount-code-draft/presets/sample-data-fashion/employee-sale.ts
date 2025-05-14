import { ReferenceDraft, LocalizedStringDraft } from '../../../../commons';
import { TDiscountCodeDraftBuilder } from '../../../types';
import * as DiscountCodeDraft from '../../index';

const employeeSale = (cartDiscountId: string): TDiscountCodeDraftBuilder =>
  DiscountCodeDraft.presets
    .empty()
    .code('emp15')
    .name(LocalizedStringDraft.presets.empty()['en-US']('Employee Sale'))
    .description(LocalizedStringDraft.presets.empty())
    .cartDiscounts([
      ReferenceDraft.random().id(cartDiscountId).typeId('cart-discount'),
    ])
    .isActive(true)
    .groups([]);

export default employeeSale;

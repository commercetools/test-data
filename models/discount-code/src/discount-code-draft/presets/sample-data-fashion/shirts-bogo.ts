import {
  LocalizedStringDraft,
  ReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TDiscountCodeDraftBuilder } from '../../../types';
import * as DiscountCodeDraft from '../../index';

const shirtsBogo = (cartDiscountId: string): TDiscountCodeDraftBuilder =>
  DiscountCodeDraft.presets
    .empty()
    .code('BOGO')
    .name(LocalizedStringDraft.presets.empty()['en-US']('BOGO'))
    .description(LocalizedStringDraft.presets.empty())
    .cartDiscounts([
      ReferenceDraft.random().id(cartDiscountId).typeId('cart-discount'),
    ])
    .isActive(true)
    .maxApplications(1)
    .maxApplicationsPerCustomer(1)
    .groups([]);

export default shirtsBogo;

import {
  LocalizedStringDraft,
  ReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TDiscountCodeDraftBuilder } from '../../../types';
import * as DiscountCodeDraft from '../../index';

const furnitureBogo = (cartDiscountId: string): TDiscountCodeDraftBuilder =>
  DiscountCodeDraft.presets
    .empty()
    .code('BOGO')
    .name(
      LocalizedStringDraft.presets.empty()['en-US']('BOGO')['en-GB']('BOGO')
    )
    .description(LocalizedStringDraft.presets.empty())
    .cartDiscounts([
      ReferenceDraft.random().id(cartDiscountId).typeId('cart-discount'),
    ])
    .isActive(true)
    .maxApplicationsPerCustomer(5)
    .groups([]);

export default furnitureBogo;

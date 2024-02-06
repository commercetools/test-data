import {
  LocalizedString,
  ReferenceDraft,
} from '@commercetools-test-data/commons';
import { TDiscountCodeDraftBuilder } from '../../../types';
import * as DiscountCodeDraft from '../../index';

const furnitureBogo = (cartDiscountId: string): TDiscountCodeDraftBuilder =>
  DiscountCodeDraft.presets
    .empty()
    .code('BOGO')
    .name(LocalizedString.presets.empty()['en-US']('BOGO')['en-GB']('BOGO'))
    .description(LocalizedString.presets.empty())
    .cartDiscounts([
      ReferenceDraft.random().id(cartDiscountId).typeId('cart-discount'),
    ])
    .isActive(true)
    .maxApplications(1)
    .maxApplicationsPerCustomer(1)
    .groups([]);

export default furnitureBogo;

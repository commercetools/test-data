import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import * as DiscountCodeDraft from '../..';
import { TDiscountCodeDraftBuilder } from '../../../types';

const shirtsBogo = (): TDiscountCodeDraftBuilder =>
  DiscountCodeDraft.presets
    .empty()
    .code('BOGO')
    .name(LocalizedString.presets.empty()['en-US']('BOGO'))
    .description(LocalizedString.presets.empty())
    // TODO: use the cart discount preset key here when available
    .cartDiscounts([
      Reference.random().key('ShirtsBOGO').typeId('cart-discount'),
    ])
    .isActive(true)
    .maxApplications(1)
    .maxApplicationsPerCustomer(1)
    .groups([]);

export default shirtsBogo;

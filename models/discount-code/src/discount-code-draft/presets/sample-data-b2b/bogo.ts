import {
  LocalizedStringDraft,
  ReferenceDraft,
} from '@commercetools-test-data/commons';
import { TDiscountCodeDraftBuilder } from '../../../types';
import * as DiscountCodeDraft from '../../index';

const bogo = (cartDiscountId: string): TDiscountCodeDraftBuilder =>
  DiscountCodeDraft.presets
    .empty()
    .code('BOGO')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('BOGO')
        ['it-IT']('BOGO')
        ['nl-NL']('BOGO')
        ['fr-FR']('BOGO')
        ['en-AU']('BOGO')
        ['es-ES']('BOGO')
        ['en-GB']('BOGO')
        ['en-NZ']('BOGO')
        ['pt-PT']('BOGO')
        ['en-US']('BOGO')
    )
    .cartDiscounts([
      ReferenceDraft.random().id(cartDiscountId).typeId('cart-discount'),
    ])
    .isActive(true)
    .maxApplications(1)
    .maxApplicationsPerCustomer(1);

export default bogo;

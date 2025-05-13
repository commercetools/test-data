import { KeyReferenceDraft, LocalizedStringDraft } from '@/models/commons';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@/models/tax-category';
import * as ZoneRateDraft from '../../../../zone-rate/zone-rate-draft';
import type { TShippingMethodDraftBuilder } from '../../../types';
import * as ShippingMethodDraft from '../../index';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const standardShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('standard-shipping')
    .name('Standard Shipping')
    .localizedName(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Standard Shipping')
        ['de-DE']('Standardversand')
        ['en-GB']('Standard Shipping')
    )
    .localizedDescription(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('3-5 business days')
        ['de-DE']('3-5 Arbeitstage')
        ['en-GB']('3-5 business days')
    )
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .zoneRates([
      ZoneRateDraft.presets.sampleDataB2CLifestyle.standardEuropeUk(),
      ZoneRateDraft.presets.sampleDataB2CLifestyle.standardUsa(),
    ])
    .isDefault(true);

export default standardShippingMethod;

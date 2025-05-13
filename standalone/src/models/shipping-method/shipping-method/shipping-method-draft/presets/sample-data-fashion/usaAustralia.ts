import { KeyReferenceDraft, LocalizedStringDraft } from '@/models/commons';
import { TaxCategoryDraft } from '@/models/tax-category';
import type { TTaxCategoryDraft } from '@/models/tax-category';
import * as ZoneRateDraft from '../../../../zone-rate/zone-rate-draft';
import type { TShippingMethodDraftBuilder } from '../../../types';
import * as ShippingMethodDraft from '../../index';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const usaAustraliaShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('shipping-usa-australia')
    .name('Sample Shipping Method USA/Australia')
    .localizedDescription(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Sample Shipping Method USA/Australia')
    )
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .zoneRates([
      ZoneRateDraft.presets.sampleDataFashion.usa(),
      ZoneRateDraft.presets.sampleDataFashion.australia(),
    ])
    .isDefault(false);

export default usaAustraliaShippingMethod;

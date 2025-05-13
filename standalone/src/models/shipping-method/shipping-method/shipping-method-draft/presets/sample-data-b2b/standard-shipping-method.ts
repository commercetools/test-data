import { LocalizedStringDraft, KeyReferenceDraft } from '@/models/commons';

import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@/models/tax-category';
import * as ZoneRateDraft from '../../../../zone-rate/zone-rate-draft';
import type { TShippingMethodDraftBuilder } from '../../../types';
import * as ShippingMethodDraft from '../../index';

const standardTaxTaxCategory = TaxCategoryDraft.presets.sampleDataB2B
  .standardTax()
  .build<TTaxCategoryDraft>();

const standardShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('standard-shipping-method')
    .name('Standard shipping method')
    .localizedName(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Standardversand')
        ['en-GB']('Standard shipping')
        ['en-US']('Standard shipping')
        ['es-ES']('Envío estándar')
        ['fr-FR']('Expédition standard')
        ['it-IT']('Spedizione standard')
        ['nl-NL']('Standaard verzending')
        ['pt-PT']('Envio normal')
    )
    .localizedDescription(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('4-6 Wochen')
        ['en-GB']('4-6 weeks')
        ['en-US']('4-6 weeks')
        ['es-ES']('4-6 semanas')
        ['fr-FR']('4-6 semaines')
        ['it-IT']('4-6 settimane')
        ['nl-NL']('4-6 weken')
        ['pt-PT']('4-6 semanas')
    )
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .zoneRates([
      ZoneRateDraft.presets.sampleDataB2B.europeStandard(),
      ZoneRateDraft.presets.sampleDataB2B.northAmerica(),
    ])
    .isDefault(true);

export default standardShippingMethod;

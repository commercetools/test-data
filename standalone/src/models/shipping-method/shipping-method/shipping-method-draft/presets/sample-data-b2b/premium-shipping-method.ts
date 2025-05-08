import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '../../../../../tax-category';
import * as ZoneRateDraft from '../../../../zone-rate/zone-rate-draft';
import type { TShippingMethodDraftBuilder } from '../../../types';
import * as ShippingMethodDraft from '../../index';

const standardTaxTaxCategory = TaxCategoryDraft.presets.sampleDataB2B
  .standardTax()
  .build<TTaxCategoryDraft>();

const premiumShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('premium-shipping-method')
    .name('Premium shipping method')
    .localizedName(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Premium-Versand')
        ['en-GB']('Premium shipping')
        ['en-US']('Premium shipping')
        ['es-ES']('Envío Premium')
        ['fr-FR']('Expédition premium')
        ['it-IT']('Spedizione Premium')
        ['nl-NL']('Premium verzending')
        ['pt-PT']('Transporte Premium')
    )
    .localizedDescription(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('2-3 Wochen')
        ['en-GB']('2-3 weeks')
        ['en-US']('2-3 weeks')
        ['es-ES']('2-3 semanas')
        ['fr-FR']('2-3 semaines')
        ['it-IT']('2-3 settimane')
        ['nl-NL']('2-3 weken')
        ['pt-PT']('2-3 semanas')
    )
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .zoneRates([ZoneRateDraft.presets.sampleDataB2B.europePremium()])
    .isDefault(false);

export default premiumShippingMethod;

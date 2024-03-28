import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
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
    .localizedDescription(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Premium -Versandmethode')
        ['en-GB']('Premium shipping method')
        ['it-IT']('Metodo di spedizione premium')
        ['nl-NL']('Premium verzendmethode')
        ['fr-FR']("Méthode d'expédition premium")
        ['es-ES']('Método de envío premium')
        ['pt-PT']('Método de envio premium')
        ['en-US']('Premium shipping method')
    )
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .zoneRates([ZoneRateDraft.presets.sampleDataB2B.europePremium()])
    .isDefault(false);

export default premiumShippingMethod;

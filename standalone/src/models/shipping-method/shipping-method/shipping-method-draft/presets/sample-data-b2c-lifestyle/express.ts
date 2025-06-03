import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '../../../../../commons';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '../../../../../tax-category';
import * as ZoneRateDraft from '../../../../zone-rate/zone-rate-draft';
import type { TShippingMethodDraftBuilder } from '../../../types';
import * as ShippingMethodDraft from '../../index';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const expressShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('express-shipping')
    .name('Express Shipping')
    .localizedName(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Express shipping')
        ['de-DE']('Expressversand')
        ['en-GB']('Express shipping')
    )
    .localizedDescription(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('1-2 business days')
        ['de-DE']('1-2 Arbeitstage')
        ['en-GB']('1-2 business days')
    )
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .zoneRates([
      ZoneRateDraft.presets.sampleDataB2CLifestyle.expressGermanyAndUkAndUs(),
    ])
    .isDefault(false);

export default expressShippingMethod;

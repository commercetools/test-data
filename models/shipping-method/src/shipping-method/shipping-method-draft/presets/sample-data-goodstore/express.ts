import {
  KeyReferenceDraft,
  LocalizedString,
} from '@commercetools-test-data/commons';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import * as ZoneRateDraft from '../../../../zone-rate/zone-rate-draft';
import type { TShippingMethodDraftBuilder } from '../../../types';
import * as ShippingMethodDraft from '../../index';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const expressShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('express-delivery')
    .name('Express Delivery')
    .localizedName(
      LocalizedString.presets
        .empty()
        ['en-US']('Express Delivery')
        ['de-DE']('Express Delivery')
        ['en-GB']('Express Delivery')
    )
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .zoneRates([ZoneRateDraft.presets.sampleDataGoodStore.europeExpress()])
    .isDefault(false);

export default expressShippingMethod;

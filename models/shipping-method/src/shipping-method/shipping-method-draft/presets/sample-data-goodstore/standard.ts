import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { TaxCategoryDraft } from '@commercetools-test-data/tax-category';
import type { TTaxCategoryDraft } from '@commercetools-test-data/tax-category';
import * as ZoneRateDraft from '../../../../zone-rate/zone-rate-draft';
import type { TShippingMethodDraftBuilder } from '../../../types';
import * as ShippingMethodDraft from '../../index';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .EUTaxCategory()
  .build<TTaxCategoryDraft>();

const standardShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('standard-delivery')
    .name('Standard Delivery')
    .localizedDescription(
      LocalizedString.presets.empty()['en-US']('4')['en-GB']('4')['de-DE']('4')
    )
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .zoneRates([
      ZoneRateDraft.presets.sampleDataGoodStore.europe(),
      ZoneRateDraft.presets.sampleDataGoodStore.unitedKingdom(),
    ])
    .isDefault(true);

export default standardShippingMethod;

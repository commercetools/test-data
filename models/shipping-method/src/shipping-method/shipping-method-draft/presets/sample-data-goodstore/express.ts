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

const expressShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('express-delivery')
    .name('Express Delivery')
    .localizedDescription(
      LocalizedString.presets.empty()['en-US']('2')['en-GB']('2')['de-DE']('2')
    )
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .zoneRates([ZoneRateDraft.presets.sampleDataGoodStore.europeExpress()])
    .isDefault(false);

export default expressShippingMethod;

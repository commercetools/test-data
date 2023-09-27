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
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const usaShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('us-delivery')
    .name('US Delivery')
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .zoneRates([ZoneRateDraft.presets.sampleDataGoodStore.usa()])
    .isDefault(true);

export default usaShippingMethod;

import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { TaxCategoryDraft } from '@commercetools-test-data/tax-category';
import type { TTaxCategoryDraft } from '@commercetools-test-data/tax-category';
import * as ZoneRateDraft from '../../../../zone-rate/zone-rate-draft';
import type { TShippingMethodDraftBuilder } from '../../../types';
import * as ShippingMethodDraft from '../../index';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const EuropeShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('shipping-europe')
    .name('Sample Shipping Method Europe')
    .localizedDescription(LocalizedString.presets.empty()['en-US']('Sample Shipping Method Europe'))
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .zoneRates([ZoneRateDraft.presets.sampleDataFashion.europe()])
    .isDefault(true);

export default EuropeShippingMethod;

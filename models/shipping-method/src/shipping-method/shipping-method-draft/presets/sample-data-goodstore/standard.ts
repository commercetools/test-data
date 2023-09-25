import { KeyReference } from '@commercetools-test-data/commons';
import {
  TTaxCategoryDraft,
  TaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import { ShippingMethodDraft } from '../../..';
import eur10000 from '../../../../shipping-rate/shipping-rate-draft/presets/sample-data-goodstore/eur-10000';
import europe from '../../../../zone-rate/zone-rate-draft/presets/sample-data-fashion/europe';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .EUTaxCategory()
  .build<TTaxCategoryDraft>();

const standardShippingMethod = () =>
  ShippingMethodDraft.presets
    .empty()
    .key('standard-delivery')
    .name('Standard Delivery')
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .zoneRates([europe().shippingRates(eur10000())])
    .isDefault(true);

export default standardShippingMethod;

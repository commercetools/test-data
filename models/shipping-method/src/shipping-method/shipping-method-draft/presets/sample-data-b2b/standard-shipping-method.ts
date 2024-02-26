import { KeyReferenceDraft } from '@commercetools-test-data/commons';
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

const standardShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('standard-shipping-method')
    .name('Standard shipping method')
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .zoneRates([
      ZoneRateDraft.presets.sampleDataB2B.europe(),
      ZoneRateDraft.presets.sampleDataB2B.northAmerica(),
    ])
    .isDefault(true);

export default standardShippingMethod;

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

const premiumShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('premium-shipping-method')
    .name('Premium shipping method')
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .zoneRates([ZoneRateDraft.presets.sampleDataB2B.europe()])
    .isDefault(false);

export default premiumShippingMethod;

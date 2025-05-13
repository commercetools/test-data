import { KeyReferenceDraft, LocalizedStringDraft } from '@/models/commons';
import { TaxCategoryDraft } from '@/models/tax-category';
import type { TTaxCategoryDraft } from '@/models/tax-category';
import * as ZoneRateDraft from '../../../../zone-rate/zone-rate-draft';
import type { TShippingMethodDraftBuilder } from '../../../types';
import * as ShippingMethodDraft from '../../index';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const europeShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('shipping-europe')
    .name('Sample Shipping Method Europe')
    .localizedDescription(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Sample Shipping Method Europe')
    )
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .zoneRates([ZoneRateDraft.presets.sampleDataFashion.europe()])
    .isDefault(true);

export default europeShippingMethod;

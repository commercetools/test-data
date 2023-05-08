import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { TaxCategoryDraft } from '@commercetools-test-data/tax-category';
import type { TTaxCategoryDraft } from '@commercetools-test-data/tax-category';
import * as ShippingMethodDraft from '../../../shipping-method-draft';
import type { TShippingMethodDraftBuilder } from '../../../types';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const dhlShippingMethod = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.presets
    .empty()
    .key('dhl')
    .name('DHL')
    .localizedDescription(LocalizedString.presets.empty()['en-US']('DHL'))
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .zoneRates([]) // TODO: add zone rates
    .isDefault(true);

export default dhlShippingMethod;

/*
{
    zoneRates: [
      {
        zone: {
          typeId: 'zone',
          key: 'europe',
        },
        shippingRates: [
          {
            price: {
              currencyCode: 'EUR',
              centAmount: 1299,
            },
            freeAbove: {
              currencyCode: 'EUR',
              centAmount: 15000,
            },
            tiers: [],
          },
        ],
      },
    ],
  },

*/

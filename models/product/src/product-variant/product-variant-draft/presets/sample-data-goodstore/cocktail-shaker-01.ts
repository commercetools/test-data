import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cocktailShaker01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('COCT-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(699))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(699))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(699))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_74255917-W96v6fME.jpeg'
        )
        .dimensions({ w: 3850, h: 5500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_74620379%20-og0Draq4.jpeg'
        )
        .dimensions({ w: 5000, h: 3750 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB':
          '- Includes built in strainer\n- Stainless steel\n- Dishwasher safe',
        'de-DE':
          '- Inklusive eingebautem Sieb\n- Edelstahl\n- Spülmaschinenfest',
        'en-US':
          '- Includes built in strainer\n- Stainless steel\n- Dishwasher safe',
      }),
    ]);

export default cocktailShaker01;

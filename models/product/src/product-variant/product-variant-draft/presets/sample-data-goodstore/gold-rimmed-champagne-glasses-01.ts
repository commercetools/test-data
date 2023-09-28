import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const goldRimmedChampagneGlasses01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('GRCG-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(3000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(3000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(3000))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_324635452-3Zz1APY0.jpeg'
        )
        .dimensions({ w: 2192, h: 3288 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_344282685-gcyWcmSc.jpeg'
        )
        .dimensions({ w: 5143, h: 4113 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_345693811-G_NTG3Ju.jpeg'
        )
        .dimensions({ w: 6869, h: 3435 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_347188911-EjT8SgdN.jpeg'
        )
        .dimensions({ w: 8080, h: 5077 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB':
          '- Set of 5 glasses\n- Imported crystal\n- Gold polish on the rims',
        'de-DE':
          '- Set mit 5 Gläsern\n- Importierter Kristall\n- Goldpolitur an den Felgen',
        'en-US':
          '- Set of 5 glasses\n- Imported crystal\n- Gold polish on the rims',
      }),
    ]);

export default goldRimmedChampagneGlasses01;

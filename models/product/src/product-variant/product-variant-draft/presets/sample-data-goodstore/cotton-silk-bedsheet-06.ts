import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cottonSilkBedsheet06 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CSKP-083')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1899))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1899))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1899))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_342052824-bUbU_TKg.jpeg'
        )
        .dimensions({ w: 5589, h: 3627 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_369728670-I0XNqDPK.jpeg'
        )
        .dimensions({ w: 5216, h: 3228 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB':
            '- Machine washable\n- 600 thread count\n- Includes 1 fitted sheet',
          'en-US':
            '- Machine washable\n- 600 thread count\n- Includes 1 fitted sheet',
          'de-DE':
            '- Maschinenwaschbar\n- Fadenanzahl: 600\n- Beinhaltet 1 Spannbetttuch',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#ffc0cb', 'de-DE': '#ffc0cb', 'en-US': '#ffc0cb' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Salmon', 'de-DE': 'Lachs', 'en-US': 'Salmon' }),
      AttributeDraft.random().name('size').value({ 'en-GB': 'King' }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'Cotton silk bed sheets are made from a blend of cotton and silk fibers. Cotton is known for its durability, breathability, and ease of care. Silk, on the other hand, is renowned for its smoothness, lustrous sheen, and luxurious feel. By combining the two, we offer a product that balances durability, breathability, and luxury.  Cotton silk bed sheets often have a subtle sheen from the silk, making them look more luxurious. ',
          'en-US':
            'Cotton silk bed sheets are made from a blend of cotton and silk fibers. Cotton is known for its durability, breathability, and ease of care. Silk, on the other hand, is renowned for its smoothness, lustrous sheen, and luxurious feel. By combining the two, we offer a product that balances durability, breathability, and luxury.  Cotton silk bed sheets often have a subtle sheen from the silk, making them look more luxurious. ',
          'de-DE':
            'Diese Bettwäsche aus Baumwollseide besteht aus einer Mischung aus Baumwoll- und Seidenfasern. Baumwolle ist für ihre Strapazierfähigkeit, Atmungsaktivität und Pflegeleichtigkeit bekannt. Seide hingegen ist bekannt für ihre Geschmeidigkeit, ihren strahlenden Glanz und ihr luxuriöses Gefühl. Durch die Kombination beider Fasersorten bieten wir ein Produkt an, das Haltbarkeit, Atmungsaktivität und Luxus in Einklang bringt. ',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFC0CB',
          label: { 'de-DE': 'Rosa', 'en-GB': 'Pink', 'en-US': 'Pink' },
        }),
    ]);

export default cottonSilkBedsheet06;

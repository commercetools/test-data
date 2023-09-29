import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const classicCoffeeCup01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CCC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(6999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(6999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(6999))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Classic%20Coffee%20Cup-WKYAx6HB.jpeg'
        )
        .dimensions({ w: 6000, h: 4000 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_549486132-p88nilwV.jpeg'
        )
        .dimensions({ w: 4153, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB':
            '- Includes a matching saucer\n- Set includes 4 cups and saucers',
          'en-US':
            '- Includes a matching saucer\n- Set includes 4 cups and saucers',
          'de-DE':
            '- Passende Untertasse im Lieferumfang enthalten\n- Set enthält 4 Tassen und Untertassen',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'The Classic Coffee Cup is a classic drinking vessel that can be used to serve coffee in formal settings. The cup is made of ceramic or porcelain and has a cylindrical shape with a handle on one side. It may be plain in design and has a capacity of around 6 to 8 ounces.  The saucer is a small plate that is round and is designed to hold the coffee cup when it is not in use. It is made of the same material as the cup. The saucer has a rim or edge that is slightly raised to help prevent spills.  When serving coffee in a cup with a saucer, it is common to also provide a small spoon for stirring the coffee and adding sugar or cream. Overall, a coffee cup with a saucer is a classic and elegant way to enjoy a cup of coffee, and is often associated with sophistication and refinement.',
          'en-US':
            'The Classic Coffee Cup is a classic drinking vessel that can be used to serve coffee in formal settings. The cup is made of ceramic or porcelain and has a cylindrical shape with a handle on one side. It may be plain in design and has a capacity of around 6 to 8 ounces.  The saucer is a small plate that is round and is designed to hold the coffee cup when it is not in use. It is made of the same material as the cup. The saucer has a rim or edge that is slightly raised to help prevent spills.  When serving coffee in a cup with a saucer, it is common to also provide a small spoon for stirring the coffee and adding sugar or cream. Overall, a coffee cup with a saucer is a classic and elegant way to enjoy a cup of coffee, and is often associated with sophistication and refinement.',
          'de-DE':
            'Die Classic Coffee Cup ist ein klassisches Trinkgefäß, das zum Servieren von Kaffee in formellen Umgebungen verwendet werden kann. Die Tasse besteht aus Keramik oder Porzellan und hat eine zylindrische Form mit einem Henkel an einer Seite. Es kann schlicht im Design sein und hat eine Kapazität von etwa 6 bis 8 Unzen.  Die Untertasse ist ein kleiner Teller, der rund ist und dazu dient, die Kaffeetasse zu halten, wenn sie nicht verwendet wird. Es besteht aus dem gleichen Material wie die Tasse. Die Untertasse hat einen Rand oder Rand, der leicht erhöht ist, um ein Verschütten zu verhindern.  Beim Servieren von Kaffee in einer Tasse mit Untertasse ist es üblich, auch einen kleinen Löffel zum Umrühren des Kaffees und zum Hinzufügen von Zucker oder Sahne bereitzustellen. Insgesamt ist eine Kaffeetasse mit Untertasse eine klassische und elegante Art, eine Tasse Kaffee zu genießen, und wird oft mit Raffinesse und Raffinesse in Verbindung gebracht.',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFF', 'de-DE': '#FFF', 'en-US': '#FFF' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'White', 'de-DE': 'Weiß', 'en-US': 'White' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default classicCoffeeCup01;

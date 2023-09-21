import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const minimalistCedarNightstand01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CNS-0434')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(7900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(7900))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532428984-nJKPXWcM.jpeg'
        )
        .dimensions({ w: 4011, h: 6016 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532428985-2CMGhCT8.jpeg'
        )
        .dimensions({ w: 4011, h: 6016 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532429244-e0M2rOCa.jpeg'
        )
        .dimensions({ w: 4011, h: 6016 }),
    ])
    .attributes([
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.',
        'en-US':
          'The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.',
        'de-DE':
          'Der minimalistische Nachttisch aus Zedernholz wurde entwickelt, um eine einfache und funktionale Oberfläche für die Platzierung von Gegenständen neben einem Bett zu bieten. Der Nachttisch verfügt über ein klares und schlankes Design mit minimalen dekorativen Elementen, die der minimalistischen Ästhetik entsprechen.  Der Nachttisch ist aus natürlichem Zedernholz gefertigt, das für seine Haltbarkeit, Fäulnisbeständigkeit und attraktive Maserung bekannt ist. Das Holz wird mit einer leichten Beize oder einer klaren Beschichtung versehen, um die natürliche Schönheit des Holzes hervorzuheben.  Insgesamt ist ein minimalistischer Nachttisch aus Zedernholz eine stilvolle und funktionale Ergänzung für jedes Schlafzimmer. Sein klares und einfaches Design ergänzt eine Vielzahl von Einrichtungsstilen, und die natürliche Schönheit des Zedernholzes verleiht dem Raum Wärme und Textur.',
      }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Cedar', 'de-DE': 'Zeder', 'en-US': 'Cedar' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#8C9585', 'de-DE': '#8C9585', 'en-US': '#8C9585' }),
    ]);

export default minimalistCedarNightstand01;

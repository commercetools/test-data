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
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(7900))
        .country('US'),
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
          'Der minimalistische Nachttisch aus Zedernholz bietet eine einfache und funktionelle Ablagefläche für Gegenstände neben dem Bett. Der Nachttisch zeichnet sich durch ein klares und schlichtes Design mit minimalen dekorativen Elementen aus, ganz im Sinne der minimalistischen Ästhetik. Der Nachttisch ist aus natürlichem Zedernholz gefertigt, das für seine Langlebigkeit, Fäulnisbeständigkeit und attraktive Maserung bekannt ist. Das Holz ist mit einer hellen Beize oder einem Klarlack behandelt, um die natürliche Schönheit des Holzes hervorzuheben. Insgesamt ist ein minimalistischer Nachttisch aus Zedernholz eine stilvolle und funktionelle Ergänzung für jedes Schlafzimmer. Sein klares und einfaches Design passt zu einer Vielzahl von Einrichtungsstilen, und die natürliche Schönheit des Zedernholzes verleiht dem Raum Wärme und Textur.',
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
        .value({ 'en-GB': '#8C9585', 'en-US': '#8C9585', 'de-DE': '#8C9585' }),
    ]);

export default minimalistCedarNightstand01;

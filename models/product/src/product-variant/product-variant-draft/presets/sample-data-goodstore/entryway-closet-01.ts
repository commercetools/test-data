import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const entrywayCloset01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('EWC-07')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(259900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(259900))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_377072189-VkrMZMom.jpeg'
        )
        .dimensions({ w: 5500, h: 4125 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_377072356-yRaYUH0J.jpeg'
        )
        .dimensions({ w: 4700, h: 4512 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_377072850-w10HxuUM.jpeg'
        )
        .dimensions({ w: 5500, h: 4125 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly included in delivery',
        'de-DE': '- Montage im Lieferumfang enthalten',
        'en-US': '- Assembly included in delivery',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'An entryway closet with mirrors and lights is a built-in closet that is situated near the entrance of a house or apartment. The closet features full-length mirrors, which are designed to allow people to check their appearance before leaving the house. The closet has lighting installed, which can help to brighten the space and make it easier to find and grab items stored within. The overall design of the closet is minimalist in nature, with clean lines and a simple color scheme that is meant to blend seamlessly with the surrounding decor. In addition to mirrors and lighting, the closet may feature hooks or shelves for storing jackets, hats, shoes, and other accessories.',
        'en-US':
          'An entryway closet with mirrors and lights is a built-in closet that is situated near the entrance of a house or apartment. The closet features full-length mirrors, which are designed to allow people to check their appearance before leaving the house. The closet has lighting installed, which can help to brighten the space and make it easier to find and grab items stored within. The overall design of the closet is minimalist in nature, with clean lines and a simple color scheme that is meant to blend seamlessly with the surrounding decor. In addition to mirrors and lighting, the closet may feature hooks or shelves for storing jackets, hats, shoes, and other accessories.',
        'de-DE':
          'Ein Eingangsschrank mit Spiegeln und Leuchten ist ein Einbauschrank, der sich in der Nähe des Eingangs eines Hauses oder einer Wohnung befindet. Der Schrank verfügt über Ganzkörperspiegel, die es den Menschen ermöglichen, ihr Aussehen zu überprüfen, bevor sie das Haus verlassen. Der Schrank verfügt über eine Beleuchtung, die dazu beitragen kann, den Raum aufzuhellen und das Auffinden und Greifen von darin aufbewahrten Gegenständen zu erleichtern. Das Gesamtdesign des Schranks ist von Natur aus minimalistisch, mit klaren Linien und einem einfachen Farbschema, das sich nahtlos in das umgebende Dekor einfügen soll. Zusätzlich zu Spiegeln und Beleuchtung kann der Schrank Haken oder Regale zum Aufbewahren von Jacken, Hüten, Schuhen und anderen Accessoires aufweisen.',
      }),
      AttributeDraft.random().name('finishlabel').value({
        'en-GB': 'White Oak',
        'de-DE': 'weiße Eiche',
        'en-US': 'White Oak',
      }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#EFDBB4', 'de-DE': '#EFDBB4', 'en-US': '#EFDBB4' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
    ]);

export default entrywayCloset01;

import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const rusticBowl01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(199))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(199))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(199))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Rustic%20Bowl-eVQClQh7.jpeg'
        )
        .dimensions({ w: 5105, h: 3280 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 bowl',
        'en-US': '- Includes 1 bowl',
        'de-DE': '- Enthält 1 Schüssel',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.  The square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.',
        'en-US':
          'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.  The square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.',
        'de-DE':
          'Diese quadratische Holzschale bietet vielfältige Einsatzmöglichkeiten - vom Servieren von Salaten und Snacks bis hin zum Aufbewahren von Obst und Gemüse. Sie fügt sich ideal in jede ungezwungene oder rustikale Speiseumgebungen ein und verleiht jedem Tisch einen Hauch von Wärme und natürlicher Schönheit. Die quadratische Holzschale ist eine praktische und stilvolle Wahl zum Servieren und Aufbewahren von Speisen. Ihre natürliche Schönheit und Langlebigkeit bietet verschiedene Einsatzmöglichkeiten in der Küche und als Servierobjekt bei unterschiedlichen Anlässen.',
      }),
    ]);

export default rusticBowl01;

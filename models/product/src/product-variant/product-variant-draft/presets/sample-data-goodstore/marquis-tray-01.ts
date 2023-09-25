import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const marquisTray01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MWT-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(399))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(399))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(399))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Marquis%20Tray-AGdsW5Ot.jpeg'
        )
        .dimensions({ w: 5056, h: 4784 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Includes 1 tray',
          'de-DE': '- Enthält 1 Tablett',
          'en-US': '- Includes 1 tray',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'This wooden serving tray is ideal for serving a variety of foods and drinks, including appetizers, entrees, cocktails, and coffee. It can be used in both casual and formal settings, and are a popular choice for outdoor dining, picnics, and barbecues.  Wooden serving trays are durable and easy to clean, making them a practical choice for everyday use. They can be wiped clean with a damp cloth or washed with soap and water.  Overall, a wooden serving tray is a functional and stylish choice for serving food and drinks. Its natural material and unique texture add warmth and character to any dining setting, while its versatility and practicality make it a staple in many kitchens and dining rooms.',
          'en-US':
            'This wooden serving tray is ideal for serving a variety of foods and drinks, including appetizers, entrees, cocktails, and coffee. It can be used in both casual and formal settings, and are a popular choice for outdoor dining, picnics, and barbecues.  Wooden serving trays are durable and easy to clean, making them a practical choice for everyday use. They can be wiped clean with a damp cloth or washed with soap and water.  Overall, a wooden serving tray is a functional and stylish choice for serving food and drinks. Its natural material and unique texture add warmth and character to any dining setting, while its versatility and practicality make it a staple in many kitchens and dining rooms.',
          'de-DE':
            'Dieses Serviertablett aus Holz ist ideal zum Servieren einer Vielzahl von Speisen und Getränken, einschließlich Vorspeisen, Hauptgerichten, Cocktails und Kaffee. Es kann sowohl in ungezwungener als auch in formeller Umgebung verwendet werden und ist eine beliebte Wahl für Mahlzeiten im Freien, Picknicks und Grillabende.  Serviertabletts aus Holz sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können mit einem feuchten Tuch abgewischt oder mit Wasser und Seife gewaschen werden.  Insgesamt ist ein Serviertablett aus Holz eine funktionale und stilvolle Wahl zum Servieren von Speisen und Getränken. Sein natürliches Material und seine einzigartige Textur verleihen jedem Essbereich Wärme und Charakter, während seine Vielseitigkeit und Praktikabilität es zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern machen.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFA500',
          label: { 'de-DE': 'Orange', 'en-GB': 'Orange', 'en-US': 'Orange' },
        }),
    ]);

export default marquisTray01;

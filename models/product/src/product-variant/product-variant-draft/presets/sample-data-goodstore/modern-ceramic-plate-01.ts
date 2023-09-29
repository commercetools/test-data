import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernCeramicPlate01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MCP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(299))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Ivory%20Plate-F5UVLI_t.jpeg'
        )
        .dimensions({ w: 5088, h: 4576 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Includes 1 plate',
          'en-US': '- Includes 1 plate',
          'de-DE': '- Enthält 1 Teller',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.   The plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.   Ceramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.  Ceramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.  Overall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.',
          'en-US':
            'A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.   The plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.   Ceramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.  Ceramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.  Overall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.',
          'de-DE':
            'Ein Keramikteller ist ein klassischer und vielseitiger Teller, der zum Servieren einer Vielzahl von Speisen verwendet wird. Der Teller hat eine flache, runde Oberfläche mit einer leicht erhöhten Lippe an den Rändern, um ein Überschwappen der Speisen zu verhindern. Keramische Essteller eignen sich ideal zum Servieren einer Vielzahl von Gerichten, darunter Vorspeisen, Beilagen, Salate und Desserts. Sie können sowohl in zwanglosem als auch in formellem Rahmen verwendet werden und sind sowohl in Restaurants als auch in Privathaushalten eine beliebte Wahl.  Keramische Essteller sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können in der Spülmaschine oder von Hand mit Wasser und Seife gereinigt werden. Insgesamt ist ein Keramikteller eine klassische und funktionelle Wahl für das Servieren von Speisen. Seine Schlichtheit und Langlebigkeit machen ihn zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern, und seine Vielseitigkeit macht ihn für eine Reihe von Essanlässen geeignet.',
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

export default modernCeramicPlate01;

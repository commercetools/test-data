import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const roundServingTray01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RST-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(499))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_574785851-6ffVkxQx.jpeg'
        )
        .dimensions({ w: 3537, h: 3537 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_573210049-93d41DN5.jpeg'
        )
        .dimensions({ w: 3283, h: 1719 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Hand wash only',
          'en-US': '- Hand wash only',
          'de-DE': '- Handwäsche nur',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Round wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.',
          'en-US':
            'This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.  Round wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.',
          'de-DE':
            'Das runde Serviertablett aus Holz ist ein vielseitiger und langlebiger Gegenstand, der in einer Vielzahl von Gelegenheiten zum Einsatz kommt. Das für das Tablett verwendete Holz mit seiner warmen und natürlichen Ästhetik sorgt für den rustikalen Charme. Runde Holztabletts sind leicht zu reinigen und zu pflegen. Sie können mit einem feuchten Tuch und einem milden Reinigungsmittel abgewischt werden. Nach dem Gebrauch sollten sie gründlich getrocknet werden, damit keine Feuchtigkeit im Inneren eingeschlossen wird. Ein rundes Serviertablett aus Holz ist ein praktisches und zugleich attraktives Designelement, das jedes Ambiente mit seiner natürlichen Eleganz komplementiert. Es ist langlebig und vielseitig einsetzbar zum Servieren und Präsentieren von Speisen und Getränken, oder aber als Designelement zum Hervorheben einzelner Gegenstände.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#964B00',
          label: {
            'de-DE': 'Dunkelbraun',
            'en-GB': 'Dark Brown',
            'en-US': 'Dark Brown',
          },
        }),
    ]);

export default roundServingTray01;

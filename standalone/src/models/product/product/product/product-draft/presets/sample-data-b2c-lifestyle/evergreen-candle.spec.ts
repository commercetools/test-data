import type { TProductDraft } from '../../../types';
import evergreenCandle from './evergreen-candle';
describe(`with evergreenCandle preset`, () => {
  it('should return a sample evergreenCandle product preset', () => {
    const evergreenCandlePreset = evergreenCandle().build<TProductDraft>();
    expect(evergreenCandlePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "home-accents",
            "typeId": "category",
          },
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Dieser Kerzenhalter hat ein schlichtes, rustikales Design mit einer hohen, schlanken Form, die an einen Baumstamm erinnert. Er kann auch mit kleinen immergrünen Zweigen, Beeren und Tannenzapfen dekoriert werden, um ein natürlicheres und organischeres Aussehen zu schaffen.  Wenn die Kerze angezündet wird, wirft sie einen warmen und gemütlichen Schein und schafft eine festliche und einladende Atmosphäre in jedem Raum. Der immergrüne Duft des Kerzenhalters kann auch durch die Wärme der Kerze verstärkt werden und erfüllt den Raum mit dem natürlichen Duft von Kiefer und Holz.  Insgesamt ist ein immergrüner Kerzenhalter während der Weihnachtszeit eine charmante und rustikale Ergänzung für jedes Zuhause. Seine natürlichen Materialien und Erdtöne können dazu beitragen, eine warme und einladende Atmosphäre zu schaffen, während sein einfaches, aber elegantes Design jedem Raum einen Hauch von Natur verleiht.",
          "en": undefined,
          "en-GB": "The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.  When the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.  Overall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.",
          "en-US": "The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.  When the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.  Overall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.",
          "fr": undefined,
        },
        "key": "evergreen-candle",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "search-color",
              "value": "green",
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Helles Oliv",
                "en-GB": "Light Olive",
                "en-US": "Light Olive",
              },
            },
            {
              "name": "color-code",
              "value": "#BAB86C",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2160,
                "w": 3840,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Evergreen_Candle-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 2160,
                "w": 3840,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Evergreen_Candle-1.3.jpeg",
            },
            {
              "dimensions": {
                "h": 6720,
                "w": 4480,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Evergreen_Candle-1.2.jpeg",
            },
          ],
          "key": "evergreenCandle01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "EC-0993",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kerze "Evergreen"",
          "en": undefined,
          "en-GB": "Evergreen Candle",
          "en-US": "Evergreen Candle",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "immergrne-kerze",
          "en": undefined,
          "en-GB": "evergreen-candle",
          "en-US": "evergreen-candle",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});

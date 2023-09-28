import type { TProductDraft } from '../../../types';
import evergreenCandle from './evergreen-candle';

describe(`with evergreenCandle preset`, () => {
  it(`should return a evergreenCandle preset`, () => {
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
        "key": "evergreen-candle",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "product-description",
    "value": {
      "en-GB": "The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.  When the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.  Overall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.",
      "en-US": "The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.  When the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.  Overall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.",
      "de-DE": "Der Kerzenhalter hat ein schlichtes, rustikales Design mit einer hohen, schlanken Form, die an einen Baumstamm erinnert. Es kann auch mit kleinen immergrünen Zweigen, Beeren und Tannenzapfen dekoriert werden, um ein natürlicheres und organischeres Aussehen zu schaffen.  Wenn die Kerze angezündet wird, wirft sie einen warmen und gemütlichen Schein und schafft eine festliche und einladende Atmosphäre in jedem Raum. Der immergrüne Duft des Kerzenhalters kann auch durch die Wärme der Kerze verstärkt werden und erfüllt den Raum mit dem natürlichen Duft von Kiefer und Holz.  Insgesamt ist ein immergrüner Kerzenhalter während der Ferienzeit eine charmante und rustikale Ergänzung für jedes Zuhause. Seine natürlichen Materialien und Erdtöne können dazu beitragen, eine warme und einladende Atmosphäre zu schaffen, während sein einfaches, aber elegantes Design jedem Raum einen Hauch von Natur verleiht."
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#00FF00",
      "label": {
        "de-DE": "Grün",
        "en-GB": "Green",
        "en-US": "Green"
      }
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Evergreen",
      "de-DE": "Immergrün",
      "en-US": "Evergreen"
    }
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#156F29",
      "de-DE": "#156F29",
      "en-US": "#156F29"
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_537837949-oKQ-Kd3Q.jpeg",
    "dimensions": {
      "w": 3840,
      "h": 2160
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_537917105-H0lwB1x2.jpeg",
    "dimensions": {
      "w": 3840,
      "h": 2160
    }
  },
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_485090921-6JFeqs-M.jpeg",
    "dimensions": {
      "w": 4480,
      "h": 6720
    }
  }
]
,
          "sku": undefined,
          "prices": [
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "EUR",
      "centAmount": 299,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 299,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 299,
      "fractionDigits": 2
    },
    "country": "US"
  }
]
,
        },
      "metaDescription": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "name": {
            "de-DE": "Immergrüne Kerze",
            "en-GB": "Evergreen Candle",
            "en-US": "Evergreen Candle"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "immergrne-kerze",
            "en-GB": "evergreen-candle",
            "en-US": "evergreen-candle"
          },
        "taxCategory": {
          "key": "standard-tax-category",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});

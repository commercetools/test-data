import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import sweetPeaCandle from './sweet-pea-candle';

describe(`with sweetPeaCandle preset`, () => {
  it(`should return a sweetPeaCandle preset`, () => {
    const sweetPeaCandlePreset = sweetPeaCandle().build<TProductDraft>();
    expect(sweetPeaCandlePreset).toMatchInlineSnapshot(`
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
          "de-DE": "Die kleine Kerze mit der Duftnote Schleierkraut oder Duftwicke ist eine charmante und hübsche Ergänzung für jedes Zuhause. Die Größe der Kerze macht sie zum perfekten Accessoire auf einem Tisch oder Schreibtisch.  Die Kerze besteht aus hochwertigem Wachs, das mit den süßen und zarten Noten der Duftwicke durchdrungen ist. Der Duft ist frisch und blumig und erinnert an einen blühenden Garten im Frühling.  Die Kerze wird in einem Glasbehälter präsentiert, der zum Schutz der Flamme beiträgt und der Kerze eine dekorative Note verleiht.  Wenn die Kerze angezündet wird, verströmt sie ein sanftes und angenehmes Aroma und erfüllt den Raum mit dem süßen und beruhigenden Duft von Schleierkraut. Der Duft schafft eine entspannende und beruhigende Atmosphäre und eignen sich gut für die Verwendung während einer Yogastunde, eines Schaumbads oder zur Einstimmung in einen erholsamen Schlaf.  Eine Kerze mit dem Aroma der Duftwicke ist eine hübsche und charmante Ergänzung für jedes Zuhause und bringt einen Hauch von Natur und Ruhe in jeden Wohnraum.",
          "en": undefined,
          "en-GB": "A small sweet pea scented candle is a charming and delightful addition to any home. The candle is small in size, making it perfect for use on a tabletop or desk.  The candle is made from high-quality wax, which is infused with the sweet and delicate fragrance of sweet pea. The scent is fresh and floral, reminiscent of a blooming garden in the springtime.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a gentle and pleasant aroma, filling the room with the sweet and soothing fragrance of sweet pea. The scent can help to create a relaxing and calming atmosphere, making it perfect for use during a yoga practice, a bubble bath, or a cozy night in.  A sweet pea scented candle is a delightful and charming addition to any home, bringing a touch of nature and tranquility to your living space.",
          "en-US": "A small sweet pea scented candle is a charming and delightful addition to any home. The candle is small in size, making it perfect for use on a tabletop or desk.  The candle is made from high-quality wax, which is infused with the sweet and delicate fragrance of sweet pea. The scent is fresh and floral, reminiscent of a blooming garden in the springtime.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a gentle and pleasant aroma, filling the room with the sweet and soothing fragrance of sweet pea. The scent can help to create a relaxing and calming atmosphere, making it perfect for use during a yoga practice, a bubble bath, or a cozy night in.  A sweet pea scented candle is a delightful and charming addition to any home, bringing a touch of nature and tranquility to your living space.",
          "fr": undefined,
        },
        "key": "sweet-pea-candle",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Wird im Glas geliefert
      - 180 Gramm",
                "en-GB": "- Comes in glass jar
      - 180 grams",
                "en-US": "- Comes in glass jar
      - 180 grams",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Rosa:#FFC0CB",
                "en-GB": "Pink:#FFC0CB",
                "en-US": "Pink:#FFC0CB",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Glas:transparent",
                "en-GB": "Glass:transparent",
                "en-US": "Glass:transparent",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3693,
                "w": 5540,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 4480,
                "w": 6720,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.2.jpeg",
            },
            {
              "dimensions": {
                "h": 4427,
                "w": 6640,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.3.jpeg",
            },
          ],
          "key": "sweetPeaCandle01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "699EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 699,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "699GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 699,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "699USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 699,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "SPC-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kerze Duftwicke",
          "en": undefined,
          "en-GB": "Sweet Pea Candle",
          "en-US": "Sweet Pea Candle",
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
          "de-DE": "kerze-der-sen-erbse",
          "en": undefined,
          "en-GB": "sweat-pea-candle",
          "en-US": "sweat-pea-candle",
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

  it(`should return a sweetPeaCandle preset when built for graphql`, () => {
    const sweetPeaCandlePresetGraphql =
      sweetPeaCandle().buildGraphql<TProductDraftGraphql>();
    expect(sweetPeaCandlePresetGraphql).toMatchInlineSnapshot(`
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
        "description": [
          {
            "locale": "en-US",
            "value": "A small sweet pea scented candle is a charming and delightful addition to any home. The candle is small in size, making it perfect for use on a tabletop or desk.  The candle is made from high-quality wax, which is infused with the sweet and delicate fragrance of sweet pea. The scent is fresh and floral, reminiscent of a blooming garden in the springtime.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a gentle and pleasant aroma, filling the room with the sweet and soothing fragrance of sweet pea. The scent can help to create a relaxing and calming atmosphere, making it perfect for use during a yoga practice, a bubble bath, or a cozy night in.  A sweet pea scented candle is a delightful and charming addition to any home, bringing a touch of nature and tranquility to your living space.",
          },
          {
            "locale": "de-DE",
            "value": "Die kleine Kerze mit der Duftnote Schleierkraut oder Duftwicke ist eine charmante und hübsche Ergänzung für jedes Zuhause. Die Größe der Kerze macht sie zum perfekten Accessoire auf einem Tisch oder Schreibtisch.  Die Kerze besteht aus hochwertigem Wachs, das mit den süßen und zarten Noten der Duftwicke durchdrungen ist. Der Duft ist frisch und blumig und erinnert an einen blühenden Garten im Frühling.  Die Kerze wird in einem Glasbehälter präsentiert, der zum Schutz der Flamme beiträgt und der Kerze eine dekorative Note verleiht.  Wenn die Kerze angezündet wird, verströmt sie ein sanftes und angenehmes Aroma und erfüllt den Raum mit dem süßen und beruhigenden Duft von Schleierkraut. Der Duft schafft eine entspannende und beruhigende Atmosphäre und eignen sich gut für die Verwendung während einer Yogastunde, eines Schaumbads oder zur Einstimmung in einen erholsamen Schlaf.  Eine Kerze mit dem Aroma der Duftwicke ist eine hübsche und charmante Ergänzung für jedes Zuhause und bringt einen Hauch von Natur und Ruhe in jeden Wohnraum.",
          },
          {
            "locale": "en-GB",
            "value": "A small sweet pea scented candle is a charming and delightful addition to any home. The candle is small in size, making it perfect for use on a tabletop or desk.  The candle is made from high-quality wax, which is infused with the sweet and delicate fragrance of sweet pea. The scent is fresh and floral, reminiscent of a blooming garden in the springtime.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a gentle and pleasant aroma, filling the room with the sweet and soothing fragrance of sweet pea. The scent can help to create a relaxing and calming atmosphere, making it perfect for use during a yoga practice, a bubble bath, or a cozy night in.  A sweet pea scented candle is a delightful and charming addition to any home, bringing a touch of nature and tranquility to your living space.",
          },
        ],
        "key": "sweet-pea-candle",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Comes in glass jar\\n- 180 grams","en-US":"- Comes in glass jar\\n- 180 grams","de-DE":"- Wird im Glas geliefert\\n- 180 Gramm"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"Pink:#FFC0CB","de-DE":"Rosa:#FFC0CB","en-US":"Pink:#FFC0CB"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"Glass:transparent","de-DE":"Glas:transparent","en-US":"Glass:transparent"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3693,
                "width": 5540,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 4480,
                "width": 6720,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.2.jpeg",
            },
            {
              "dimensions": {
                "height": 4427,
                "width": 6640,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.3.jpeg",
            },
          ],
          "key": "sweetPeaCandle01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "699EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 699,
                  "currencyCode": "EUR",
                },
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "699GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 699,
                  "currencyCode": "GBP",
                },
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "699USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 699,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "SPC-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sweet Pea Candle",
          },
          {
            "locale": "en-GB",
            "value": "Sweet Pea Candle",
          },
          {
            "locale": "de-DE",
            "value": "Kerze Duftwicke",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-US",
            "value": "sweat-pea-candle",
          },
          {
            "locale": "en-GB",
            "value": "sweat-pea-candle",
          },
          {
            "locale": "de-DE",
            "value": "kerze-der-sen-erbse",
          },
        ],
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

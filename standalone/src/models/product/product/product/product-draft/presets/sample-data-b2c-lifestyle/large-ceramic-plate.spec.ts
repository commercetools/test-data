import type { TProductDraft } from '../../../types';
import largeCeramicPlate from './large-ceramic-plate';

describe(`with largeCeramicPlate preset`, () => {
  it(`should return a largeCeramicPlate preset`, () => {
    const largeCeramicPlatePreset = largeCeramicPlate().build<TProductDraft>();
    expect(largeCeramicPlatePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "plates",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein großer runder Keramikteller in Helloliv und Hellgrau ist ein schönes und vielseitiges Geschirr, das sich perfekt zum Servieren einer Vielzahl von Mahlzeiten eignet. Der Teller wird in der Regel aus hochwertigem Keramikmaterial handgefertigt und verfügt über eine glänzende Oberfläche, die ihm ein poliertes und elegantes Aussehen verleiht.  Die Platte ist groß und hat typischerweise einen Durchmesser von etwa 12 bis 14 Zoll. Dadurch eignet er sich ideal zum Servieren großer Speisenportionen, wie z. B. eines Hauptgerichts oder einer gemeinsamen Vorspeise. Die runde Form des Tellers bietet viel Platz zum Anrichten von Speisen, während der erhöhte Rand des Tellers verhindert, dass Saucen und Säfte über die Seiten schwappen.  Der Teller ist in zwei schönen und neutralen Farben erhältlich - Helloliv und Hellgrau. Diese Farben sind perfekt, um eine breite Palette von Einrichtungsstilen und Farbschemata für Esszimmer zu ergänzen, von modern und minimalistisch bis rustikal und erdig.  Der Teller zeichnet sich durch ein schlichtes und elegantes Design mit glatter Oberfläche und einem minimalistischen Look aus. Dies macht es ideal für zwanglose und formelle Anlässe, von alltäglichen Familienessen bis hin zu besonderen Anlässen und Dinnerpartys.  Insgesamt ist ein großer runder Keramikteller in hellen Oliv- und Hellgrautönen eine schöne und praktische Ergänzung für jedes Esszimmer. Sein schlichtes und elegantes Design, kombiniert mit seinen vielseitigen Größen- und Farboptionen, machen ihn zur perfekten Wahl, um eine Vielzahl von Mahlzeiten zu servieren und ein stilvolles und einladendes Speiseerlebnis zu schaffen.",
          "en": undefined,
          "en-GB": "A large ceramic round plate that comes in light olive and light gray colors is a beautiful and versatile piece of dinnerware that is perfect for serving a variety of meals. The plate is typically handcrafted from high-quality ceramic material, and features a glossy finish that gives it a polished and elegant appearance.  The plate is large in size, typically measuring around 12-14 inches in diameter. This makes it ideal for serving large portions of food, such as a main course or a shared appetizer. The round shape of the plate provides ample space for arranging food, while the raised edge of the plate prevents sauces and juices from spilling over the sides.  The plate comes in two beautiful and neutral colors - light olive and light gray. These colors are perfect for complementing a wide range of dining room decor styles and color schemes, from modern and minimalist to rustic and earthy.  The plate features a simple and elegant design, with a smooth surface and a minimalist look. This makes it ideal for both casual and formal dining occasions, from everyday family meals to special occasions and dinner parties.  Overall, a large ceramic round plate in light olive and light gray colors is a beautiful and practical addition to any dining room. Its simple and elegant design, combined with its versatile size and color options, make it a perfect choice for serving a variety of meals and creating a stylish and inviting dining experience.",
          "en-US": "A large ceramic round plate that comes in light olive and light gray colors is a beautiful and versatile piece of dinnerware that is perfect for serving a variety of meals. The plate is typically handcrafted from high-quality ceramic material, and features a glossy finish that gives it a polished and elegant appearance.  The plate is large in size, typically measuring around 12-14 inches in diameter. This makes it ideal for serving large portions of food, such as a main course or a shared appetizer. The round shape of the plate provides ample space for arranging food, while the raised edge of the plate prevents sauces and juices from spilling over the sides.  The plate comes in two beautiful and neutral colors - light olive and light gray. These colors are perfect for complementing a wide range of dining room decor styles and color schemes, from modern and minimalist to rustic and earthy.  The plate features a simple and elegant design, with a smooth surface and a minimalist look. This makes it ideal for both casual and formal dining occasions, from everyday family meals to special occasions and dinner parties.  Overall, a large ceramic round plate in light olive and light gray colors is a beautiful and practical addition to any dining room. Its simple and elegant design, combined with its versatile size and color options, make it a perfect choice for serving a variety of meals and creating a stylish and inviting dining experience.",
          "fr": undefined,
        },
        "key": "large-ceramic-plate",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": {
                "de-DE": "Helles Oliv:#BAB86C",
                "en-GB": "Light Olive:#BAB86C",
                "en-US": "Light Olive:#BAB86C",
              },
            },
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Ceramic
      - Sold as 1 piece
      - Dishwasher safe",
                "en-GB": "- Ceramic
      - Sold as 1 piece
      - Dishwasher safe
      - Microwave safe",
                "en-US": "- Ceramic
      - Sold as 1 piece
      - Dishwasher safe",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2700,
                "w": 3000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 2700,
                "w": 3000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-1.2.jpeg",
            },
          ],
          "key": "largeCeramicPlate01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "399EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 399,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "399GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 399,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "399USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 399,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "LCP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Große Keramikplatte",
          "en": undefined,
          "en-GB": "Large Ceramic Plate",
          "en-US": "Large Ceramic Plate",
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
          "de-DE": "groe-keramikplatte",
          "en": undefined,
          "en-GB": "large-ceramic-plate",
          "en-US": "large-ceramic-plate",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "color",
                "value": {
                  "de-DE": "Hell grau:#D3D3D3",
                  "en-GB": "Light Grey:#D3D3D3",
                  "en-US": "Light Gray:#D3D3D3",
                },
              },
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Ceramic
      - Sold as 1 piece
      - Dishwasher safe",
                  "en-GB": "- Ceramic
      - Sold as 1 piece
      - Dishwasher safe
      - Microwave safe",
                  "en-US": "- Ceramic
      - Sold as 1 piece
      - Dishwasher safe",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 2700,
                  "w": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-2.1.jpeg",
              },
              {
                "dimensions": {
                  "h": 2700,
                  "w": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-2.2.jpeg",
              },
            ],
            "key": "largeCeramicPlate02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "399EUR",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 399,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "399GBP",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 399,
                  "currencyCode": "GBP",
                },
              },
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "399USD",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 399,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "LCP-02",
          },
        ],
      }
    `);
  });

  it(`should return a largeCeramicPlate preset when built for graphql`, () => {
    const largeCeramicPlatePresetGraphql =
      largeCeramicPlate().buildGraphql<TProductDraft>();
    expect(largeCeramicPlatePresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "plates",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "A large ceramic round plate that comes in light olive and light gray colors is a beautiful and versatile piece of dinnerware that is perfect for serving a variety of meals. The plate is typically handcrafted from high-quality ceramic material, and features a glossy finish that gives it a polished and elegant appearance.  The plate is large in size, typically measuring around 12-14 inches in diameter. This makes it ideal for serving large portions of food, such as a main course or a shared appetizer. The round shape of the plate provides ample space for arranging food, while the raised edge of the plate prevents sauces and juices from spilling over the sides.  The plate comes in two beautiful and neutral colors - light olive and light gray. These colors are perfect for complementing a wide range of dining room decor styles and color schemes, from modern and minimalist to rustic and earthy.  The plate features a simple and elegant design, with a smooth surface and a minimalist look. This makes it ideal for both casual and formal dining occasions, from everyday family meals to special occasions and dinner parties.  Overall, a large ceramic round plate in light olive and light gray colors is a beautiful and practical addition to any dining room. Its simple and elegant design, combined with its versatile size and color options, make it a perfect choice for serving a variety of meals and creating a stylish and inviting dining experience.",
          },
          {
            "locale": "en-US",
            "value": "A large ceramic round plate that comes in light olive and light gray colors is a beautiful and versatile piece of dinnerware that is perfect for serving a variety of meals. The plate is typically handcrafted from high-quality ceramic material, and features a glossy finish that gives it a polished and elegant appearance.  The plate is large in size, typically measuring around 12-14 inches in diameter. This makes it ideal for serving large portions of food, such as a main course or a shared appetizer. The round shape of the plate provides ample space for arranging food, while the raised edge of the plate prevents sauces and juices from spilling over the sides.  The plate comes in two beautiful and neutral colors - light olive and light gray. These colors are perfect for complementing a wide range of dining room decor styles and color schemes, from modern and minimalist to rustic and earthy.  The plate features a simple and elegant design, with a smooth surface and a minimalist look. This makes it ideal for both casual and formal dining occasions, from everyday family meals to special occasions and dinner parties.  Overall, a large ceramic round plate in light olive and light gray colors is a beautiful and practical addition to any dining room. Its simple and elegant design, combined with its versatile size and color options, make it a perfect choice for serving a variety of meals and creating a stylish and inviting dining experience.",
          },
          {
            "locale": "de-DE",
            "value": "Ein großer runder Keramikteller in Helloliv und Hellgrau ist ein schönes und vielseitiges Geschirr, das sich perfekt zum Servieren einer Vielzahl von Mahlzeiten eignet. Der Teller wird in der Regel aus hochwertigem Keramikmaterial handgefertigt und verfügt über eine glänzende Oberfläche, die ihm ein poliertes und elegantes Aussehen verleiht.  Die Platte ist groß und hat typischerweise einen Durchmesser von etwa 12 bis 14 Zoll. Dadurch eignet er sich ideal zum Servieren großer Speisenportionen, wie z. B. eines Hauptgerichts oder einer gemeinsamen Vorspeise. Die runde Form des Tellers bietet viel Platz zum Anrichten von Speisen, während der erhöhte Rand des Tellers verhindert, dass Saucen und Säfte über die Seiten schwappen.  Der Teller ist in zwei schönen und neutralen Farben erhältlich - Helloliv und Hellgrau. Diese Farben sind perfekt, um eine breite Palette von Einrichtungsstilen und Farbschemata für Esszimmer zu ergänzen, von modern und minimalistisch bis rustikal und erdig.  Der Teller zeichnet sich durch ein schlichtes und elegantes Design mit glatter Oberfläche und einem minimalistischen Look aus. Dies macht es ideal für zwanglose und formelle Anlässe, von alltäglichen Familienessen bis hin zu besonderen Anlässen und Dinnerpartys.  Insgesamt ist ein großer runder Keramikteller in hellen Oliv- und Hellgrautönen eine schöne und praktische Ergänzung für jedes Esszimmer. Sein schlichtes und elegantes Design, kombiniert mit seinen vielseitigen Größen- und Farboptionen, machen ihn zur perfekten Wahl, um eine Vielzahl von Mahlzeiten zu servieren und ein stilvolles und einladendes Speiseerlebnis zu schaffen.",
          },
        ],
        "key": "large-ceramic-plate",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": "{"en-US":"Light Olive:#BAB86C","en-GB":"Light Olive:#BAB86C","de-DE":"Helles Oliv:#BAB86C"}",
            },
            {
              "name": "productspec",
              "value": "{"en-US":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe","en-GB":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe\\n- Microwave safe","de-DE":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2700,
                "width": 3000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 2700,
                "width": 3000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-1.2.jpeg",
            },
          ],
          "key": "largeCeramicPlate01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "399EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 399,
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
              "key": "399GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 399,
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
              "key": "399USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 399,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "LCP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Large Ceramic Plate",
          },
          {
            "locale": "en-GB",
            "value": "Large Ceramic Plate",
          },
          {
            "locale": "de-DE",
            "value": "Große Keramikplatte",
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
            "value": "large-ceramic-plate",
          },
          {
            "locale": "en-GB",
            "value": "large-ceramic-plate",
          },
          {
            "locale": "de-DE",
            "value": "groe-keramikplatte",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "color",
                "value": "{"en-US":"Light Gray:#D3D3D3","en-GB":"Light Grey:#D3D3D3","de-DE":"Hell grau:#D3D3D3"}",
              },
              {
                "name": "productspec",
                "value": "{"en-US":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe","en-GB":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe\\n- Microwave safe","de-DE":"- Ceramic\\n- Sold as 1 piece\\n- Dishwasher safe"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 2700,
                  "width": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-2.1.jpeg",
              },
              {
                "dimensions": {
                  "height": 2700,
                  "width": 3000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-2.2.jpeg",
              },
            ],
            "key": "largeCeramicPlate02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "399EUR",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 399,
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
                "key": "399GBP",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 399,
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
                "key": "399USD",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 399,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "LCP-02",
          },
        ],
      }
    `);
  });
});

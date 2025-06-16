import type { TProductDraft } from '../../../types';
import cottonTwoSeaterSofa from './cotton-two-seater-sofa';
describe(`with cottonTwoSeaterSofa preset`, () => {
  it('should return a sample cottonTwoSeaterSofa product preset', () => {
    const cottonTwoSeaterSofaPreset =
      cottonTwoSeaterSofa().build<TProductDraft>();
    expect(cottonTwoSeaterSofaPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "sofas",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Unser 2-Sitzer-Baumwollsofa ist eine gemütliche und bequeme Sitzgelegenheit für jedes Zuhause. Aus weichem, hochwertigem Baumwollstoff gefertigt, ist dieses Sofa sanft zur Haut und pflegeleicht. Die beiden Sitzkissen sind weich und stützend und bieten ein komfortables Sitzerlebnis. Die Rückenlehne des Sofas ist gut gepolstert und bietet reichlich Rückenunterstützung, während die Armlehnen für ein bequemes und entspanntes Gefühl sanft abgerundet sind. Der Holzrahmen des Sofas ist robust und langlebig, sodass er viele Jahre hält. Mit einer neutralen Farbe fügt sich dieses Sofa nahtlos in jeden Einrichtungsstil ein, während das schlichte und elegante Design jedem Raum einen Hauch von Raffinesse verleiht.",
          "en": undefined,
          "en-GB": "The 2-seater cotton sofa is a cozy and comfortable seating option for any home. Made from soft, high-quality cotton fabric, this sofa is gentle on the skin and easy to maintain. The two seat cushions are plush and supportive, providing a comfortable seating experience. The sofa's backrest is well-padded, providing ample back support, while the armrests are gently rounded for a comfortable and relaxed feel. The wooden frame of the sofa is sturdy and durable, ensuring it will last for years to come. With a neutral color, this sofa can blend seamlessly into any interior design style, while the simple and elegant design adds a touch of sophistication to any room.",
          "en-US": "The 2-seater cotton sofa is a cozy and comfortable seating option for any home. Made from soft, high-quality cotton fabric, this sofa is gentle on the skin and easy to maintain. The two seat cushions are plush and supportive, providing a comfortable seating experience. The sofa's backrest is well-padded, providing ample back support, while the armrests are gently rounded for a comfortable and relaxed feel. The wooden frame of the sofa is sturdy and durable, ensuring it will last for years to come. With a neutral color, this sofa can blend seamlessly into any interior design style, while the simple and elegant design adds a touch of sophistication to any room.",
          "fr": undefined,
        },
        "key": "cotton-two-seater-sofa",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "search-color",
              "value": "white",
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Weiß",
                "en-GB": "White",
                "en-US": "White",
              },
            },
            {
              "name": "color-code",
              "value": "#FFFFFF",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2969,
                "w": 5035,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Two_Seater_Sofa-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 637,
                "w": 1000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Two_Seater_Sofa-1.3.jpeg",
            },
            {
              "dimensions": {
                "h": 3840,
                "w": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Two_Seater_Sofa-1.2.jpeg",
            },
          ],
          "key": "cottonTwoSeaterSofa01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "54900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 54900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "54900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 54900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "54900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 54900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CTSS-0983",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Zweisitzer-Sofa aus Baumwolle",
          "en": undefined,
          "en-GB": "Cotton Two-Seater Sofa",
          "en-US": "Cotton Two-Seater Sofa",
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
          "de-DE": "zweisitzer-sofa-aus-baumwolle",
          "en": undefined,
          "en-GB": "cotton-two-seater-sofa",
          "en-US": "cotton-two-seater-sofa",
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

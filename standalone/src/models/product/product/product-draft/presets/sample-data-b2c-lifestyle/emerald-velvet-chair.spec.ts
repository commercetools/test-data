import type { TProductDraft } from '../../../types';
import emeraldVelvetChair from './emerald-velvet-chair';
describe(`with emeraldVelvetChair preset`, () => {
  it('should return a sample emeraldVelvetChair product preset', () => {
    const emeraldVelvetChairPreset =
      emeraldVelvetChair().build<TProductDraft>();
    expect(emeraldVelvetChairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
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
          "de-DE": "Dieser Samtstuhl mit Messinggestell ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die smaragdgrüne Farbe des Samtstoffs ist weich und zart und verleiht dem Gesamtbild des Stuhls einen Hauch von Weiblichkeit.  Der Messingrahmen des Stuhls ist robust und langlebig und bietet eine solide Grundlage für den Sitzbereich. Die Messingfarbe des Gestells verleiht dem Gesamtbild des Stuhls einen Hauch von Wärme und Raffinesse. Die Kombination aus Samt und Messingrahmen schafft einen auffälligen Kontrast und macht diesen Stuhl zu einem Statement-Piece in jedem Raum.  Der Stuhl verfügt über eine hohe Rückenlehne mit geschwungenem Design, die Rücken und Schultern stützt. Der Stuhl ist sowohl auf Stil als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht.",
          "en": undefined,
          "en-GB": "A velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The emerald color of the velvet fabric is soft and delicate, adding a touch of femininity to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          "en-US": "A velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The emerald color of the velvet fabric is soft and delicate, adding a touch of femininity to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.",
          "fr": undefined,
        },
        "key": "emerald-velvet-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Nur chemische Reinigung",
                "en-GB": "- Dry clean only",
                "en-US": "- Dry clean only",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Grün:#008000",
                "en-GB": "Green:#008000",
                "en-US": "Green:#008000",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Burlywood:#deb887",
                "en-GB": "Burlywood:#deb887",
                "en-US": "Burlywood:#deb887",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4800,
                "w": 6000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Emerald_Velvet_Chair-1.1.jpeg",
            },
          ],
          "key": "emeraldVelvetChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "39900EUR",
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 39900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "39900GBP",
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 39900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "39900USD",
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 39900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "VARM-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Smaragdgrüner Samt-Stuhl",
          "en": undefined,
          "en-GB": "Emerald Velvet Chair",
          "en-US": "Emerald Velvet Chair",
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
          "de-DE": "smaragdgrner-samtstuhl",
          "en": undefined,
          "en-GB": "emerald-velvet-chair",
          "en-US": "emerald-velvet-chair",
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

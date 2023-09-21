import type { TProductDraft } from '../../../types';
import cloudQueenBed from './cloud-queen-bed';
describe(`with cloudQueenBed preset`, () => {
  it('should return a sample cloudQueenBed product preset', () => {
    const cloudQueenBedPreset = cloudQueenBed().build<TProductDraft>();
    expect(cloudQueenBedPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "beds",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "cloud-queen-bed",
      "name": {
            "de-DE": "Cloud-Queen-Bett",
            "en-GB": "Cloud Queen Bed",
            "en-US": "Cloud Queen Bed"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "cloud-queen-bett",
            "en-GB": "cloud-queen-bed",
            "en-US": "cloud-queen-bed"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "vat-standard-eu",
          "typeId": "tax-category",
        },
        {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "masterVariant": {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"colorlabel","value":{"en-GB":"Light Blue","de-DE":"Hellblau","en-US":"Light Blue"}},{"name":"color","value":{"en-GB":"#D4EEF2","de-DE":"#D4EEF2","en-US":"#D4EEF2"}},{"name":"productspec","value":{"en-GB":"- Assembly is included","de-DE":"- Die Montage ist im Preis inbegriffen","en-US":"- Assembly is included"}},{"name":"product-description","value":{"en-GB":"A queen-sized bed with fabric upholstery and a pillow-like headboard is a comfortable and elegant piece of bedroom furniture. The bed frame is rectangular and large enough to accommodate a standard queen-sized mattress. The fabric upholstery covers the entire frame, creating a smooth and comfortable surface to lean against. The headboard is the centerpiece of the bed, with a soft and plush surface that resembles a pillow. It is rectangular in shape and attached to the top of the bed frame, providing a comfortable backrest for reading or watching TV in bed. The headboard may be upholstered in the same fabric as the bed frame or in a complementary color or pattern. Overall, this bed combines comfort and style, making it a perfect addition to any bedroom.","en-US":"A queen-sized bed with fabric upholstery and a pillow-like headboard is a comfortable and elegant piece of bedroom furniture. The bed frame is rectangular and large enough to accommodate a standard queen-sized mattress. The fabric upholstery covers the entire frame, creating a smooth and comfortable surface to lean against. The headboard is the centerpiece of the bed, with a soft and plush surface that resembles a pillow. It is rectangular in shape and attached to the top of the bed frame, providing a comfortable backrest for reading or watching TV in bed. The headboard may be upholstered in the same fabric as the bed frame or in a complementary color or pattern. Overall, this bed combines comfort and style, making it a perfect addition to any bedroom.","de-DE":"Ein Queensize-Bett mit Stoffbezug und kissenartigem Kopfteil ist ein komfortables und elegantes Schlafzimmermöbel. Der Bettrahmen ist rechteckig und groß genug, um eine Standardmatratze in Queen-Size-Größe aufzunehmen. Die Stoffpolsterung bedeckt den gesamten Rahmen und schafft eine glatte und bequeme Oberfläche zum Anlehnen. Das Kopfteil ist das Herzstück des Bettes, mit einer weichen und plüschigen Oberfläche, die einem Kissen ähnelt. Es hat eine rechteckige Form und ist oben am Bettrahmen befestigt und bietet eine bequeme Rückenlehne zum Lesen oder Fernsehen im Bett. Das Kopfteil kann mit dem gleichen Stoff wie der Bettrahmen oder in einer komplementären Farbe oder einem Muster bezogen werden. Insgesamt vereint dieses Bett Komfort und Stil und ist somit eine perfekte Ergänzung für jedes Schlafzimmer."}},{"name":"color-filter","value":{"key":"#0000FF","label":{"de-DE":"Blau","en-GB":"Blue","en-US":"Blue"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});

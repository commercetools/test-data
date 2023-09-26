import type { TProductDraft } from '../../../types';
import traditionalArmchair from './traditional-armchair';
describe(`with traditionalArmchair preset`, () => {
  it('should return a sample traditionalArmchair product preset', () => {
    const traditionalArmchairPreset =
      traditionalArmchair().build<TProductDraft>();
    expect(traditionalArmchairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "the-traditionalist",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "traditional-armchair",
      "name": {
            "de-DE": "Traditioneller Sessel",
            "en-GB": "Traditional Armchair",
            "en-US": "Traditional Armchair"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "traditioneller-sessel",
            "en-GB": "traditional-armchair",
            "en-US": "traditional-armchair"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "standard-tax",
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Cotton upholstery","de-DE":"- Baumwollpolsterung","en-US":"- Cotton upholstery"}},{"name":"product-description","value":{"en-GB":"A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.","en-US":"A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.","de-DE":"Ein traditioneller Sessel mit geometrischem Muster hat ein klassisches Design mit einem Hauch von modernem Flair. Der Stuhl hat einen Rahmen und Beine aus Holz. Der Stuhl hat eine hohe Rückenlehne, die einen bequemen Platz zum Sitzen und Entspannen bietet. Die Polsterung ist weich und bietet ein weiches Gefühl für Sitz und Rückenlehne. Das geometrische Muster fügt dem Gesamtbild des Stuhls ein visuelles Interesse und eine Textur hinzu und verleiht dem Dekor des Raums ein subtiles, aber auffälliges Element.  Insgesamt könnte ein traditioneller Sessel mit geometrischem Muster eine großartige Ergänzung für ein Wohn-, Arbeits- oder Schlafzimmer sein und dem Raum sowohl Komfort als auch Stil verleihen."}},{"name":"color-filter","value":{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}},{"name":"color","value":{"en-GB":"#D0C1B0","de-DE":"#D0C1B0","en-US":"#D0C1B0"}},{"name":"colorlabel","value":{"en-GB":"Eggshell","de-DE":"Eierschale","en-US":"Eggshell"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});

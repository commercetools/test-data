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
          }
        ],
      "categoryOrderHints": {},
      "key": "cotton-two-seater-sofa",
      "name": {
            "de-DE": "Zweisitzer-Sofa aus Baumwolle",
            "en-GB": "Cotton Two-Seater Sofa",
            "en-US": "Cotton Two-Seater Sofa"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "zweisitzer-sofa-aus-baumwolle",
            "en-GB": "cotton-two-seater-sofa",
            "en-US": "cotton-two-seater-sofa"
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
          "attributes": [{"name":"product-description","value":{"en-GB":"The 2-seater cotton sofa is a cozy and comfortable seating option for any home. Made from soft, high-quality cotton fabric, this sofa is gentle on the skin and easy to maintain. The two seat cushions are plush and supportive, providing a comfortable seating experience. The sofa's backrest is well-padded, providing ample back support, while the armrests are gently rounded for a comfortable and relaxed feel. The wooden frame of the sofa is sturdy and durable, ensuring it will last for years to come. With a neutral color, this sofa can blend seamlessly into any interior design style, while the simple and elegant design adds a touch of sophistication to any room.","en-US":"The 2-seater cotton sofa is a cozy and comfortable seating option for any home. Made from soft, high-quality cotton fabric, this sofa is gentle on the skin and easy to maintain. The two seat cushions are plush and supportive, providing a comfortable seating experience. The sofa's backrest is well-padded, providing ample back support, while the armrests are gently rounded for a comfortable and relaxed feel. The wooden frame of the sofa is sturdy and durable, ensuring it will last for years to come. With a neutral color, this sofa can blend seamlessly into any interior design style, while the simple and elegant design adds a touch of sophistication to any room.","de-DE":"Das 2-Sitzer-Baumwollsofa ist eine gemütliche und bequeme Sitzgelegenheit für jedes Zuhause. Aus weichem, hochwertigem Baumwollstoff gefertigt, ist dieses Sofa sanft zur Haut und pflegeleicht. Die beiden Sitzkissen sind weich und stützend und bieten ein komfortables Sitzerlebnis. Die Rückenlehne des Sofas ist gut gepolstert und bietet reichlich Rückenunterstützung, während die Armlehnen für ein bequemes und entspanntes Gefühl sanft abgerundet sind. Der Holzrahmen des Sofas ist robust und langlebig, sodass er viele Jahre hält. Mit einer neutralen Farbe fügt sich dieses Sofa nahtlos in jeden Einrichtungsstil ein, während das schlichte und elegante Design jedem Raum einen Hauch von Raffinesse verleiht."}},{"name":"color","value":{"en-GB":"#FFF","de-DE":"#FFF","en-US":"#FFF"}},{"name":"colorlabel","value":{"en-GB":"White","de-DE":"Weiß","en-US":"White"}},{"name":"color-filter","value":{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});

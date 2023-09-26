import type { TProductDraft } from '../../../types';
import turnerVelvetArmchair from './turner-velvet-armchair';
describe(`with turnerVelvetArmchair preset`, () => {
  it('should return a sample turnerVelvetArmchair product preset', () => {
    const turnerVelvetArmchairPreset =
      turnerVelvetArmchair().build<TProductDraft>();
    expect(turnerVelvetArmchairPreset).toMatchInlineSnapshot(`
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
          }
        ],
      "categoryOrderHints": {},
      "key": "turner-velvet-armchair",
      "name": {
            "de-DE": "Turner Samtsessel",
            "en-GB": "Turner Velvet Armchair",
            "en-US": "Turner Velvet Armchair"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "turner-samtsessel",
            "en-GB": "turner-velvet-armchair",
            "en-US": "turner-velvet-armchair"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Dry clean only","de-DE":"- Nur chemische Reinigung","en-US":"- Dry clean only"}},{"name":"product-description","value":{"en-GB":"A velvet chair with ebony legs is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The dark blue color of the velvet fabric is soft and delicate, adding a touch of modernity to the overall look of the chair.  The ebony legs of the chair are sturdy and durable, providing a solid foundation for the seating area. The ebony color of the frame adds a touch of sophistication to the overall look of the chair. The combination of the velvet and ebony creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.","en-US":"A velvet chair with ebony legs is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The dark blue color of the velvet fabric is soft and delicate, adding a touch of modernity to the overall look of the chair.  The ebony legs of the chair are sturdy and durable, providing a solid foundation for the seating area. The ebony color of the frame adds a touch of sophistication to the overall look of the chair. The combination of the velvet and ebony creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.","de-DE":"Ein Samtstuhl mit Beinen aus Ebenholz ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die dunkelblaue Farbe des Samtstoffs ist weich und zart und verleiht dem Gesamtbild des Stuhls einen Hauch von Modernität.  Die Ebenholzbeine des Stuhls sind robust und langlebig und bilden eine solide Grundlage für den Sitzbereich. Die Ebenholzfarbe des Rahmens verleiht dem Gesamtbild des Stuhls einen Hauch von Raffinesse. Die Kombination aus Samt und Ebenholz schafft einen auffälligen Kontrast und macht diesen Stuhl zu einem Statement-Piece in jedem Raum.  Der Stuhl verfügt über eine hohe Rückenlehne mit geschwungenem Design, die Rücken und Schultern stützt. Die Armlehnen sind ebenfalls gebogen und bieten eine bequeme Ablagefläche für die Arme. Der Stuhl ist sowohl auf Stil als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht."}},{"name":"colorlabel","value":{"en-GB":"Royal Blue","de-DE":"Königsblau","en-US":"Royal Blue"}},{"name":"color-filter","value":{"key":"#0000FF","label":{"de-DE":"Blau","en-GB":"Blue","en-US":"Blue"}}},{"name":"color","value":{"en-GB":"#405A76","de-DE":"#405A76","en-US":"#405A76"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});

import type { TProductDraft } from '../../../types';
import serenityQueenBed from './serenity-queen-bed';
describe(`with serenityQueenBed preset`, () => {
  it('should return a sample serenityQueenBed product preset', () => {
    const serenityQueenBedPreset = serenityQueenBed().build<TProductDraft>();
    expect(serenityQueenBedPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "beds",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "serenity-queen-bed",
      "name": {
            "de-DE": "Gelassenheit Queen-Bett",
            "en-GB": "Serenity Queen Bed",
            "en-US": "Serenity Queen Bed"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "gelassenheit-queen-bett",
            "en-GB": "serenity-queen-bed",
            "en-US": "serenity-queen-bed"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Assembly included in delivery","de-DE":"- Montage im Lieferumfang enthalten","en-US":"- Assembly included in delivery"}},{"name":"product-description","value":{"en-GB":"A queen bed with an industrial pillow headboard has a unique and edgy look. The headboard is covered in a sturdy beige canvas. The headboard includes leather straps that give it an industrial look with exposed screws and bolts. The frame is also covered in the same canvas as the headboard. The bed has a simple, minimalist design with a wood frame and straight lines to complement the bold statement of the headboard. Overall, this type of bed would be perfect for someone who wants to add a touch of industrial style to their bedroom décor.","en-US":"A queen bed with an industrial pillow headboard has a unique and edgy look. The headboard is covered in a sturdy beige canvas. The headboard includes leather straps that give it an industrial look with exposed screws and bolts. The frame is also covered in the same canvas as the headboard. The bed has a simple, minimalist design with a wood frame and straight lines to complement the bold statement of the headboard. Overall, this type of bed would be perfect for someone who wants to add a touch of industrial style to their bedroom décor.","de-DE":"Ein Queensize-Bett mit industriellem Kissenkopfteil hat einen einzigartigen und kantigen Look. Das Kopfteil ist mit einem robusten beigefarbenen Stoff bezogen. Das Kopfteil umfasst Lederriemen, die ihm mit freiliegenden Schrauben und Bolzen ein industrielles Aussehen verleihen. Der Rahmen ist ebenfalls mit dem gleichen Stoff wie das Kopfteil bezogen. Das Bett hat ein einfaches, minimalistisches Design mit einem Holzrahmen und geraden Linien, die die kühne Aussage des Kopfteils ergänzen. Insgesamt wäre diese Art von Bett perfekt für jemanden, der seinem Schlafzimmerdekor einen Hauch von Industriestil verleihen möchte."}},{"name":"colorlabel","value":{"en-GB":"Gray","de-DE":"Grau","en-US":"Gray"}},{"name":"color-filter","value":{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}},{"name":"color","value":{"en-GB":"#DFDFDD","de-DE":"#DFDFDD","en-US":"#DFDFDD"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});

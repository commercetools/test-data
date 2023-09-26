import type { TProductDraft } from '../../../types';
import canelaThreeSeaterSofa from './canela-three-seater-sofa';
describe(`with canelaThreeSeaterSofa preset`, () => {
  it('should return a sample canelaThreeSeaterSofa product preset', () => {
    const canelaThreeSeaterSofaPreset =
      canelaThreeSeaterSofa().build<TProductDraft>();
    expect(canelaThreeSeaterSofaPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "sofas",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "canela-three-seater-sofa",
      "name": {
            "de-DE": "Canela 3-Sitzer-Sofa",
            "en-GB": "Canela Three-Seater Sofa",
            "en-US": "Canela Three-Seater Sofa"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "canela-3-sitzer-sofa",
            "en-GB": "canela-three-seater-sofa",
            "en-US": "canela-three-seater-sofa"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Leather upholstery \n- 3 seater","de-DE":"- Lederpolsterung\n- 3-Sitzer","en-US":"- Leather upholstery \n- 3 seater"}},{"name":"product-description","value":{"en-GB":"A leather three-seater sofa is a piece of furniture designed to provide comfortable seating for three people. The sofa is made of high-quality leather, which is known for its durability, strength, and natural beauty. The leather material is treated with protective coatings to make it more resistant to wear and tear, stains, and spills.  The sofa features a sturdy frame made of wood, with a series of springs and cushions providing support and comfort for the seated individuals. The cushions are filled with down feathers.  The leather sofa has clean lines and minimal decorative elements for a more modern or contemporary look.  Overall, a leather three-seater sofa is a versatile and stylish piece of furniture that can provide comfortable seating and add a touch of elegance to any living space.","en-US":"A leather three-seater sofa is a piece of furniture designed to provide comfortable seating for three people. The sofa is made of high-quality leather, which is known for its durability, strength, and natural beauty. The leather material is treated with protective coatings to make it more resistant to wear and tear, stains, and spills.  The sofa features a sturdy frame made of wood, with a series of springs and cushions providing support and comfort for the seated individuals. The cushions are filled with down feathers.  The leather sofa has clean lines and minimal decorative elements for a more modern or contemporary look.  Overall, a leather three-seater sofa is a versatile and stylish piece of furniture that can provide comfortable seating and add a touch of elegance to any living space.","de-DE":"Ein Leder-Dreisitzer-Sofa ist ein Möbelstück, das entworfen wurde, um bequemen Platz für drei Personen zu bieten. Das Sofa ist aus hochwertigem Leder gefertigt, das für seine Langlebigkeit, Stärke und natürliche Schönheit bekannt ist. Das Ledermaterial wird mit Schutzbeschichtungen behandelt, um es widerstandsfähiger gegen Abnutzung, Flecken und Spritzer zu machen.  Das Sofa verfügt über einen stabilen Rahmen aus Holz mit einer Reihe von Federn und Kissen, die den sitzenden Personen Halt und Komfort bieten. Die Kissen sind mit Daunenfedern gefüllt.  Das Ledersofa hat klare Linien und minimale dekorative Elemente für einen moderneren oder zeitgemäßeren Look.  Insgesamt ist ein Leder-Dreisitzer-Sofa ein vielseitiges und stilvolles Möbelstück, das bequeme Sitzgelegenheiten bietet und jedem Wohnraum einen Hauch von Eleganz verleiht."}},{"name":"colorlabel","value":{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}},{"name":"color-filter","value":{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}},{"name":"color","value":{"en-GB":"#CE9A17","de-DE":"#CE9A17","en-US":"#CE9A17"}},{"name":"finishlabel","value":{"en-GB":"Pine","de-DE":"Kiefer","en-US":"Pine"}},{"name":"finish","value":{"en-GB":"#E4B849","de-DE":"#E4B849","en-US":"#E4B849"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});

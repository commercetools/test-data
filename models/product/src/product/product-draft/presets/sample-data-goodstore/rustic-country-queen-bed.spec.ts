import type { TProductDraft } from '../../../types';
import rusticCountryQueenBed from './rustic-country-queen-bed';
describe(`with rusticCountryQueenBed preset`, () => {
  it('should return a sample rusticCountryQueenBed product preset', () => {
    const rusticCountryQueenBedPreset =
      rusticCountryQueenBed().build<TProductDraft>();
    expect(rusticCountryQueenBedPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "beds",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "rustic-country-queen-bed",
      "name": {
            "en-US": "Rustic Country Queen Bed",
            "en-GB": "Rustic Country Queen Bed",
            "de-DE": "Rustikales Country-Queen-Bett"
          },
      "metaTitle": {
            "en-US": "",
            "de-DE": ""
          },
      "searchKeywords": {},
      "slug": {
            "en-US": "rustic-country-queen-bed",
            "de-DE": "rustikales-country-queen-bett",
            "en-GB": "rustic-country-queen-bed"
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
          "attributes": [{"name":"color","value":{"en-US":"tan","en-GB":"tan","de-DE":"tan"}},{"name":"colorlabel","value":{"en-US":"Tan","en-GB":"Tan","de-DE":"Bräunen"}},{"name":"finishlabel","value":{"en-US":"Briarsmoke","en-GB":"Briarsmoke","de-DE":"Briarsmoke"}},{"name":"finish","value":{"en-US":"rosybrown","en-GB":"rosybrown","de-DE":"rosybrown"}},{"name":"productspec","value":{"en-US":"- Leather upholstery\n- Standard Queen size\n- Assembly on site","en-GB":"- Leather upholstery\n- Standard Queen size\n- Assembly on site","de-DE":"- Leather upholstery\n- Standard Queen size\n- Assembly on site"}},{"name":"product-description","value":{"en-GB":"A rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. The bed features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The headboard of the bed is upholstered in soft suede fabric, providing a comfortable and stylish backrest for reading or relaxing in bed. The suede material also adds a tactile and luxurious feel to the bed, creating a cozy and inviting atmosphere in the bedroom.  The bed comes with a sturdy wooden slat system that provides excellent support for the mattress and ensures a comfortable and restful night's sleep.  The rustic queen bed with a suede headboard is designed to be both functional and stylish. The bed comes with a matching dresser to create a cohesive and stylish bedroom decor.  Overall, a rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. Its sturdy construction, comfortable design, and charming rustic style make it a functional and beautiful addition to any home with a rustic or country decor style.","en-US":"A rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. The bed features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The headboard of the bed is upholstered in soft suede fabric, providing a comfortable and stylish backrest for reading or relaxing in bed. The suede material also adds a tactile and luxurious feel to the bed, creating a cozy and inviting atmosphere in the bedroom.  The bed comes with a sturdy wooden slat system that provides excellent support for the mattress and ensures a comfortable and restful night's sleep.  The rustic queen bed with a suede headboard is designed to be both functional and stylish. The bed comes with a matching dresser to create a cohesive and stylish bedroom decor.  Overall, a rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. Its sturdy construction, comfortable design, and charming rustic style make it a functional and beautiful addition to any home with a rustic or country decor style.","de-DE":"Ein rustikales Queensize-Bett mit einem Kopfteil aus Wildleder ist ein schönes und komfortables Möbelstück, das jedem Schlafzimmer Wärme und Struktur verleiht. Das Bett verfügt über einen stabilen Holzrahmen und einen Vintage-Look, der sowohl rustikal als auch einladend ist.  Das Kopfteil des Bettes ist mit weichem Wildleder bezogen und bietet eine bequeme und stilvolle Rückenlehne zum Lesen oder Entspannen im Bett. Das Wildledermaterial verleiht dem Bett auch ein taktiles und luxuriöses Gefühl und schafft eine gemütliche und einladende Atmosphäre im Schlafzimmer.  Das Bett ist mit einem stabilen Holzlattenrost ausgestattet, das die Matratze hervorragend stützt und für einen komfortablen und erholsamen Schlaf sorgt.  Das rustikale Queensbett mit Kopfteil aus Wildleder ist sowohl funktional als auch stilvoll gestaltet. Das Bett wird mit einer passenden Kommode geliefert, um ein zusammenhängendes und stilvolles Schlafzimmerdekor zu schaffen.  Insgesamt ist ein rustikales Queensize-Bett mit einem Kopfteil aus Wildleder ein schönes und komfortables Möbelstück, das jedem Schlafzimmer Wärme und Textur verleihen kann. Seine robuste Konstruktion, sein komfortables Design und sein charmanter rustikaler Stil machen ihn zu einer funktionalen und schönen Ergänzung für jedes Zuhause mit einem rustikalen oder ländlichen Einrichtungsstil."}},{"name":"color-filter","value":{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});

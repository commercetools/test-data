import type { TProductDraft } from '../../../types';
import classicChampagneGlasses from './classic-champagne-glasses';
describe(`with classicChampagneGlasses preset`, () => {
  it('should return a sample classicChampagneGlasses product preset', () => {
    const classicChampagneGlassesPreset =
      classicChampagneGlasses().build<TProductDraft>();
    expect(classicChampagneGlassesPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "glassware",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "classic-champagne-glasses",
      "name": {
            "en-US": "Classic Champagne Glasses",
            "de-DE": "Klassische Champagnergläser",
            "en-GB": "Classic Champagne Glasses"
          },
      "searchKeywords": {},
      "slug": {
            "en-US": "classic-champagne-glasses",
            "de-DE": "klassische-champagnerglser",
            "en-GB": "classic-champagne-glasses"
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
          "attributes": [{"name":"productspec","value":{"en-US":"- Set of 5 glasses\n- Premium glass\n- Fragile","en-GB":"- Set of 5 glasses\n- Premium glass\n- Fragile","de-DE":"- Set aus 5 Gläsern\n- Hochwertiges Glas\n- Zerbrechlich"}},{"name":"product-description","value":{"en-GB":"Classic champagne flutes are tall and slender stemware glasses that are designed specifically for serving champagne or other sparkling wines. They have a narrow and elongated bowl that tapers towards the top, which helps to preserve the carbonation and aroma of the wine.  The stem of the flute is long and thin, which allows the drinker to hold the glass without warming the contents inside. This is important because champagne and other sparkling wines are typically served chilled and can lose their effervescence if they become too warm.  The base of the flute is broad and sturdy, which provides stability and balance to the glass. The classic design of the champagne flute is elegant and timeless, making it a popular choice for formal occasions and celebrations.  The glasses are made from high-quality crystal or glass, which gives them a clear and sparkling appearance. Some champagne flutes may also feature decorative etching or patterns on the bowl or stem, adding an extra touch of elegance to the design.  Overall, classic champagne flutes are a stylish and elegant way to serve champagne and other sparkling wines. Their unique design and high-quality materials make them a popular choice for special occasions, such as weddings, anniversaries, or New Year's Eve celebrations.","en-US":"Classic champagne flutes are tall and slender stemware glasses that are designed specifically for serving champagne or other sparkling wines. They have a narrow and elongated bowl that tapers towards the top, which helps to preserve the carbonation and aroma of the wine.  The stem of the flute is long and thin, which allows the drinker to hold the glass without warming the contents inside. This is important because champagne and other sparkling wines are typically served chilled and can lose their effervescence if they become too warm.  The base of the flute is broad and sturdy, which provides stability and balance to the glass. The classic design of the champagne flute is elegant and timeless, making it a popular choice for formal occasions and celebrations.  The glasses are made from high-quality crystal or glass, which gives them a clear and sparkling appearance. Some champagne flutes may also feature decorative etching or patterns on the bowl or stem, adding an extra touch of elegance to the design.  Overall, classic champagne flutes are a stylish and elegant way to serve champagne and other sparkling wines. Their unique design and high-quality materials make them a popular choice for special occasions, such as weddings, anniversaries, or New Year's Eve celebrations.","de-DE":"Klassische Champagnerflöten sind hohe und schlanke Stielgläser, die speziell zum Servieren von Champagner oder anderen Schaumweinen entwickelt wurden. Sie haben einen schmalen und länglichen Kelch, der sich nach oben hin verjüngt, wodurch die Kohlensäure und das Aroma des Weins erhalten bleiben.  Der Stiel der Flöte ist lang und dünn, was es dem Trinker ermöglicht, das Glas zu halten, ohne den Inhalt darin zu erwärmen. Dies ist wichtig, da Champagner und andere Schaumweine normalerweise gekühlt serviert werden und ihre Spritzigkeit verlieren können, wenn sie zu warm werden.  Die Basis der Flöte ist breit und robust, was dem Glas Stabilität und Gleichgewicht verleiht. Das klassische Design der Champagnerflöte ist elegant und zeitlos, was sie zu einer beliebten Wahl für formelle Anlässe und Feiern macht.  Die Gläser sind aus hochwertigem Kristall oder Glas gefertigt, was ihnen ein klares und funkelndes Aussehen verleiht. Einige Champagnerflöten können auch dekorative Ätzungen oder Muster auf dem Kelch oder Stiel aufweisen, was dem Design einen zusätzlichen Hauch von Eleganz verleiht.  Insgesamt sind klassische Champagnerflöten eine stilvolle und elegante Art, Champagner und andere Schaumweine zu servieren. Ihr einzigartiges Design und hochwertige Materialien machen sie zu einer beliebten Wahl für besondere Anlässe wie Hochzeiten, Jubiläen oder Silvesterfeiern."}},{"name":"new-arrival","value":true}],
        },
        "variants": [

       ]
      }
    `);
  });
});

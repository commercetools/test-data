import type { TProductDraft } from '../../../types';
import classicChampagneGlasses from './classic-champagne-glasses';

describe(`with classicChampagneGlasses preset`, () => {
  it(`should return a classicChampagneGlasses preset`, () => {
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
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Klassische Champagnerflöten sind hohe und schlanke Stielgläser, die speziell zum Servieren von Champagner oder anderen Schaumweinen entwickelt wurden. Sie haben einen schmalen und länglichen Kelch, der sich nach oben hin verjüngt, wodurch die Kohlensäure und das Aroma des Weins erhalten bleiben.  Der Stiel ist lang und dünn und verhindert das Erwärmen des Champagners durch Körperwärme. Dies ist wichtig, da Champagner und andere Schaumweine normalerweise gekühlt serviert werden und ihre Spritzigkeit verlieren können, wenn sie zu warm werden.  Die Basis des Glases ist breit und robust, was dem Glas Stabilität und Gleichgewicht verleiht. Das klassische Design der Champagnerflöte ist elegant und zeitlos, was sie zu einer beliebten Wahl für formelle Anlässe und Feiern macht.  Die Gläser sind aus hochwertigem Kristall oder Glas gefertigt, was ihnen ein klares und funkelndes Aussehen verleiht. Einige Champagnerflöten können auch dekorative Ätzungen oder Muster auf dem Kelch oder Stiel aufweisen, was dem Design einen zusätzlichen Hauch von Eleganz verleiht.  Insgesamt sind klassische Champagnerflöten eine stilvolle und elegante Art, Champagner und andere Schaumweine zu servieren. Ihr einzigartiges Design und hochwertige Materialien machen sie zu einer beliebten Wahl für besondere Anlässe wie Hochzeiten, Jubiläen oder Silvesterfeiern.",
          "en": undefined,
          "en-GB": "Classic champagne flutes are tall and slender stemware glasses that are designed specifically for serving champagne or other sparkling wines. They have a narrow and elongated bowl that tapers towards the top, which helps to preserve the carbonation and aroma of the wine.  The stem of the flute is long and thin, which allows the drinker to hold the glass without warming the contents inside. This is important because champagne and other sparkling wines are typically served chilled and can lose their effervescence if they become too warm.  The base of the flute is broad and sturdy, which provides stability and balance to the glass. The classic design of the champagne flute is elegant and timeless, making it a popular choice for formal occasions and celebrations.  The glasses are made from high-quality crystal or glass, which gives them a clear and sparkling appearance. Some champagne flutes may also feature decorative etching or patterns on the bowl or stem, adding an extra touch of elegance to the design.  Overall, classic champagne flutes are a stylish and elegant way to serve champagne and other sparkling wines. Their unique design and high-quality materials make them a popular choice for special occasions, such as weddings, anniversaries, or New Year's Eve celebrations.",
          "en-US": "Classic champagne flutes are tall and slender stemware glasses that are designed specifically for serving champagne or other sparkling wines. They have a narrow and elongated bowl that tapers towards the top, which helps to preserve the carbonation and aroma of the wine.  The stem of the flute is long and thin, which allows the drinker to hold the glass without warming the contents inside. This is important because champagne and other sparkling wines are typically served chilled and can lose their effervescence if they become too warm.  The base of the flute is broad and sturdy, which provides stability and balance to the glass. The classic design of the champagne flute is elegant and timeless, making it a popular choice for formal occasions and celebrations.  The glasses are made from high-quality crystal or glass, which gives them a clear and sparkling appearance. Some champagne flutes may also feature decorative etching or patterns on the bowl or stem, adding an extra touch of elegance to the design.  Overall, classic champagne flutes are a stylish and elegant way to serve champagne and other sparkling wines. Their unique design and high-quality materials make them a popular choice for special occasions, such as weddings, anniversaries, or New Year's Eve celebrations.",
          "fr": undefined,
        },
        "key": "classic-champagne-glasses",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Set aus 5 Gläsern
      - Hochwertiges Glas
      - Zerbrechlich",
                "en-GB": "- Set of 5 glasses
      - Premium glass
      - Fragile",
                "en-US": "- Set of 5 glasses
      - Premium glass
      - Fragile",
              },
            },
            {
              "name": "new-arrival",
              "value": true,
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4101,
                "w": 5468,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Classic_Champagne_Glasses-1.4.jpeg",
            },
            {
              "dimensions": {
                "h": 4149,
                "w": 2571,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Classic_Champagne_Glasses-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 5464,
                "w": 3643,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Classic_Champagne_Glasses-1.2.jpeg",
            },
            {
              "dimensions": {
                "h": 2733,
                "w": 1659,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Classic_Champagne_Glasses-1.3.jpeg",
            },
          ],
          "key": undefined,
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3299,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3299,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3299,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CCG-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Klassische Champagnergläser",
          "en": undefined,
          "en-GB": "Classic Champagne Glasses",
          "en-US": "Classic Champagne Glasses",
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
          "de-DE": "klassische-champagnerglser",
          "en": undefined,
          "en-GB": "classic-champagne-glasses",
          "en-US": "classic-champagne-glasses",
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

  it(`should return a classicChampagneGlasses preset when built for graphql`, () => {
    const classicChampagneGlassesPresetGraphql =
      classicChampagneGlasses().buildGraphql<TProductDraft>();
    expect(classicChampagneGlassesPresetGraphql).toMatchInlineSnapshot(`
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
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Classic champagne flutes are tall and slender stemware glasses that are designed specifically for serving champagne or other sparkling wines. They have a narrow and elongated bowl that tapers towards the top, which helps to preserve the carbonation and aroma of the wine.  The stem of the flute is long and thin, which allows the drinker to hold the glass without warming the contents inside. This is important because champagne and other sparkling wines are typically served chilled and can lose their effervescence if they become too warm.  The base of the flute is broad and sturdy, which provides stability and balance to the glass. The classic design of the champagne flute is elegant and timeless, making it a popular choice for formal occasions and celebrations.  The glasses are made from high-quality crystal or glass, which gives them a clear and sparkling appearance. Some champagne flutes may also feature decorative etching or patterns on the bowl or stem, adding an extra touch of elegance to the design.  Overall, classic champagne flutes are a stylish and elegant way to serve champagne and other sparkling wines. Their unique design and high-quality materials make them a popular choice for special occasions, such as weddings, anniversaries, or New Year's Eve celebrations.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Classic champagne flutes are tall and slender stemware glasses that are designed specifically for serving champagne or other sparkling wines. They have a narrow and elongated bowl that tapers towards the top, which helps to preserve the carbonation and aroma of the wine.  The stem of the flute is long and thin, which allows the drinker to hold the glass without warming the contents inside. This is important because champagne and other sparkling wines are typically served chilled and can lose their effervescence if they become too warm.  The base of the flute is broad and sturdy, which provides stability and balance to the glass. The classic design of the champagne flute is elegant and timeless, making it a popular choice for formal occasions and celebrations.  The glasses are made from high-quality crystal or glass, which gives them a clear and sparkling appearance. Some champagne flutes may also feature decorative etching or patterns on the bowl or stem, adding an extra touch of elegance to the design.  Overall, classic champagne flutes are a stylish and elegant way to serve champagne and other sparkling wines. Their unique design and high-quality materials make them a popular choice for special occasions, such as weddings, anniversaries, or New Year's Eve celebrations.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Klassische Champagnerflöten sind hohe und schlanke Stielgläser, die speziell zum Servieren von Champagner oder anderen Schaumweinen entwickelt wurden. Sie haben einen schmalen und länglichen Kelch, der sich nach oben hin verjüngt, wodurch die Kohlensäure und das Aroma des Weins erhalten bleiben.  Der Stiel ist lang und dünn und verhindert das Erwärmen des Champagners durch Körperwärme. Dies ist wichtig, da Champagner und andere Schaumweine normalerweise gekühlt serviert werden und ihre Spritzigkeit verlieren können, wenn sie zu warm werden.  Die Basis des Glases ist breit und robust, was dem Glas Stabilität und Gleichgewicht verleiht. Das klassische Design der Champagnerflöte ist elegant und zeitlos, was sie zu einer beliebten Wahl für formelle Anlässe und Feiern macht.  Die Gläser sind aus hochwertigem Kristall oder Glas gefertigt, was ihnen ein klares und funkelndes Aussehen verleiht. Einige Champagnerflöten können auch dekorative Ätzungen oder Muster auf dem Kelch oder Stiel aufweisen, was dem Design einen zusätzlichen Hauch von Eleganz verleiht.  Insgesamt sind klassische Champagnerflöten eine stilvolle und elegante Art, Champagner und andere Schaumweine zu servieren. Ihr einzigartiges Design und hochwertige Materialien machen sie zu einer beliebten Wahl für besondere Anlässe wie Hochzeiten, Jubiläen oder Silvesterfeiern.",
          },
        ],
        "key": "classic-champagne-glasses",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-US":"- Set of 5 glasses\\n- Premium glass\\n- Fragile","en-GB":"- Set of 5 glasses\\n- Premium glass\\n- Fragile","de-DE":"- Set aus 5 Gläsern\\n- Hochwertiges Glas\\n- Zerbrechlich"}",
            },
            {
              "name": "new-arrival",
              "value": "true",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4101,
                "width": 5468,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Classic_Champagne_Glasses-1.4.jpeg",
            },
            {
              "dimensions": {
                "height": 4149,
                "width": 2571,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Classic_Champagne_Glasses-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 5464,
                "width": 3643,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Classic_Champagne_Glasses-1.2.jpeg",
            },
            {
              "dimensions": {
                "height": 2733,
                "width": 1659,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Classic_Champagne_Glasses-1.3.jpeg",
            },
          ],
          "key": undefined,
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 3299,
                  "currencyCode": "EUR",
                },
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 3299,
                  "currencyCode": "GBP",
                },
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 3299,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "CCG-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Classic Champagne Glasses",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Classic Champagne Glasses",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Klassische Champagnergläser",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "classic-champagne-glasses",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "classic-champagne-glasses",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "klassische-champagnerglser",
          },
        ],
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

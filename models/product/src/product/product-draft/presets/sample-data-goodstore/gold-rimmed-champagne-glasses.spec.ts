import type { TProductDraft } from '../../../types';
import goldRimmedChampagneGlasses from './gold-rimmed-champagne-glasses';
describe(`with goldRimmedChampagneGlasses preset`, () => {
  it('should return a sample goldRimmedChampagneGlasses product preset', () => {
    const goldRimmedChampagneGlassesPreset =
      goldRimmedChampagneGlasses().build<TProductDraft>();
    expect(goldRimmedChampagneGlassesPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "key": "glassware",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "gold-rimmed-champagne-glasses",
      "name": {
            "de-DE": "Champagnergläser mit Goldrand",
            "en-GB": "Gold Rimmed Champagne Glasses",
            "en-US": "Gold Rimmed Champagne Glasses"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "champagnerglser-mit-goldrand",
            "en-GB": "gold-rimmed-champagne-glasses",
            "en-US": "gold-rimmed-champagne-glasses"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Set of 5 glasses\n- Imported crystal\n- Gold polish on the rims","de-DE":"- Set mit 5 Gläsern\n- Importierter Kristall\n- Goldpolitur an den Felgen","en-US":"- Set of 5 glasses\n- Imported crystal\n- Gold polish on the rims"}},{"name":"product-description","value":{"en-GB":"A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.  The glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.  Overall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.","en-US":"A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.  The glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.  Overall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.","de-DE":"Ein Set Champagner-Kristallgläser mit Goldrand ist eine luxuriöse und elegante Art, Champagner oder Sekt zu servieren. Diese Gläser sind aus hochwertigem Kristall gefertigt, was ihnen ein klares und funkelndes Aussehen verleiht, das die Blasen im Champagner wunderschön widerspiegelt.  Die Gläser verfügen über einen zarten und schlanken Stiel, der es dem Trinker ermöglicht, das Glas zu halten, ohne den Inhalt darin zu erwärmen. Das goldumrandete Detail verleiht dem Design einen zusätzlichen Hauch von Luxus und Raffinesse und verleiht der Brille ein glamouröses und opulentes Aussehen.  Insgesamt ist ein Set Champagner-Kristallgläser mit Goldrand eine atemberaubende und luxuriöse Ergänzung für jede Hausbar oder Unterhaltungssammlung. Ihr elegantes und zeitloses Design, kombiniert mit ihren hochwertigen Materialien und aufwendigen Details, machen sie zur perfekten Wahl, um die besonderen Momente des Lebens stilvoll zu feiern."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});

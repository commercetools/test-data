import type { TProductDraft } from '../../../types';
import wineBottleOpener from './wine-bottle-opener';
describe(`with wineBottleOpener preset`, () => {
  it('should return a sample wineBottleOpener product preset', () => {
    const wineBottleOpenerPreset = wineBottleOpener().build<TProductDraft>();
    expect(wineBottleOpenerPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bar-accessories",
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
      "key": "wine-bottle-opener",
      "name": {
            "de-DE": "Wein Flaschenöffner",
            "en-GB": "Wine Bottle Opener",
            "en-US": "Wine Bottle Opener"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "wein-flaschenffner",
            "en-GB": "wine-bottle-opener",
            "en-US": "wine-bottle-opener"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Stainless steel","de-DE":"- Edelstahl","en-US":"- Stainless steel"}},{"name":"product-description","value":{"en-GB":"A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.","en-US":"A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.","de-DE":"Ein Weinflaschenöffner ist ein Gerät, mit dem der Korken aus einer Weinflasche entfernt wird. Dieser Öffner verfügt über eine spitze Spiralschraube, die in den Korken gedreht wird, und einen Griff oder Hebel, mit dem der Korken aus der Flasche gezogen wird. Weitere Features sind ein Flaschenöffner. Dieser Weinflaschenöffner ist im Hebelstil."}},{"name":"color-filter","value":{"key":"#C0C0C0","label":{"de-DE":"Silber","en-GB":"Silver","en-US":"Silver"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});

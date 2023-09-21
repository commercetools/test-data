import type { TProductDraft } from '../../../types';
import doubleSidedShotGlass from './double-sided-shot-glass';
describe(`with doubleSidedShotGlass preset`, () => {
  it('should return a sample doubleSidedShotGlass product preset', () => {
    const doubleSidedShotGlassPreset =
      doubleSidedShotGlass().build<TProductDraft>();
    expect(doubleSidedShotGlassPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bar-accessories",
            "typeId": "category",
          },
          {
            "key": "bar-glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "double-sided-shot-glass",
      "name": {
            "de-DE": "Doppelseitiges Schnapsglas",
            "en-GB": "Double-sided Shot Glass",
            "en-US": "Double-sided Shot Glass"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "doppelseitiges-schnapsglas",
            "en-GB": "double-sided-shot-glass",
            "en-US": "double-sided-shot-glass"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Stainless steel\n- Dishwasher safe","de-DE":"- Edelstahl\n- Spülmaschinenfest","en-US":"- Stainless steel\n- Dishwasher safe"}},{"name":"product-description","value":{"en-GB":"This steel shot glass is made of steel and has two ends, one for measuring a standard shot, and the other for measuring a larger double shot. The ends are shaped like small cups with rounded edges for easy pouring. The steel construction makes it durable and resistant to wear and tear, while also providing a sleek and modern appearance.","en-US":"This steel shot glass is made of steel and has two ends, one for measuring a standard shot, and the other for measuring a larger double shot. The ends are shaped like small cups with rounded edges for easy pouring. The steel construction makes it durable and resistant to wear and tear, while also providing a sleek and modern appearance.","de-DE":"Dieses Stahlschnapsglas besteht aus Stahl und hat zwei Enden, eines zum Messen eines Standardschnapses und das andere zum Messen eines größeren Doppelschnapses. Die Enden sind wie kleine Tassen mit abgerundeten Kanten zum einfachen Ausgießen geformt. Die Stahlkonstruktion macht es langlebig und verschleißfest und bietet gleichzeitig ein elegantes und modernes Erscheinungsbild."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});

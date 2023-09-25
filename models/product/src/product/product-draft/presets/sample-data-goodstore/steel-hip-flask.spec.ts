import type { TProductDraft } from '../../../types';
import steelHipFlask from './steel-hip-flask';
describe(`with steelHipFlask preset`, () => {
  it('should return a sample steelHipFlask product preset', () => {
    const steelHipFlaskPreset = steelHipFlask().build<TProductDraft>();
    expect(steelHipFlaskPreset).toMatchInlineSnapshot(`
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
      "key": "steel-hip-flask",
      "name": {
            "de-DE": "Flachmann aus Stahl",
            "en-GB": "Steel Hip Flask",
            "en-US": "Steel Hip Flask"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "flachmann-aus-stahl",
            "en-GB": "steel-hip-flask",
            "en-US": "steel-hip-flask"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Stainless steel","de-DE":"- Edelstahl","en-US":"- Stainless steel"}},{"name":"product-description","value":{"en-GB":"A steel hip flask is a small, curved, and flat container made of stainless steel. It is designed to hold and transport a small amount of alcoholic beverage, usually around 6-10 ounces. The flask has a hinged or screw-top lid that allows for easy opening and closing, as well as a small opening for pouring or drinking the contents. The exterior of the flask is smooth. Hip flasks are often carried in a pocket or purse for discreet consumption of alcohol while on-the-go.","en-US":"A steel hip flask is a small, curved, and flat container made of stainless steel. It is designed to hold and transport a small amount of alcoholic beverage, usually around 6-10 ounces. The flask has a hinged or screw-top lid that allows for easy opening and closing, as well as a small opening for pouring or drinking the contents. The exterior of the flask is smooth. Hip flasks are often carried in a pocket or purse for discreet consumption of alcohol while on-the-go.","de-DE":"Ein Flachmann aus Stahl ist ein kleiner, gebogener und flacher Behälter aus Edelstahl. Es ist so konzipiert, dass es eine kleine Menge alkoholischer Getränke aufnehmen und transportieren kann, normalerweise etwa 6 bis 10 Unzen. Die Flasche hat einen Scharnier- oder Schraubdeckel, der ein einfaches Öffnen und Schließen ermöglicht, sowie eine kleine Öffnung zum Ausgießen oder Trinken des Inhalts. Die Außenseite des Kolbens ist glatt. Flachmänner werden oft in einer Tasche oder Handtasche für den diskreten Konsum von Alkohol unterwegs getragen."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});

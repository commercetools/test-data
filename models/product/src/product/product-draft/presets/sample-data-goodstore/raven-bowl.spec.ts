import type { TProductDraft } from '../../../types';
import ravenBowl from './raven-bowl';
describe(`with ravenBowl preset`, () => {
  it('should return a sample ravenBowl product preset', () => {
    const ravenBowlPreset = ravenBowl().build<TProductDraft>();
    expect(ravenBowlPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bowls",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "raven-bowl",
      "name": {
            "de-DE": "Rabenschüssel",
            "en-GB": "Raven Bowl",
            "en-US": "Raven Bowl"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "rabenschssel",
            "en-GB": "raven-bowl",
            "en-US": "raven-bowl"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Includes 1 bowl","de-DE":"- Enthält 1 Schüssel","en-US":"- Includes 1 bowl"}},{"name":"product-description","value":{"en-GB":"This bowl is a dish designed to serve soup and other liquid-based foods. It is a square-shaped bowl with four straight sides and a flat bottom, creating a modern and contemporary look for dining.  Overall, a square soup bowl is a functional and stylish choice for serving soup and other liquid-based foods. Its unique shape and contemporary design make it a popular choice for those who appreciate modern aesthetics and practicality.","en-US":"This bowl is a dish designed to serve soup and other liquid-based foods. It is a square-shaped bowl with four straight sides and a flat bottom, creating a modern and contemporary look for dining.  Overall, a square soup bowl is a functional and stylish choice for serving soup and other liquid-based foods. Its unique shape and contemporary design make it a popular choice for those who appreciate modern aesthetics and practicality.","de-DE":"Diese Schüssel ist ein Teller zum Servieren von Suppen und anderen Speisen auf flüssiger Basis. Es ist eine quadratische Schüssel mit vier geraden Seiten und einem flachen Boden, die einen modernen und zeitgemäßen Look für das Essen schafft.  Insgesamt ist eine quadratische Suppenschüssel eine funktionale und stilvolle Wahl zum Servieren von Suppen und anderen Speisen auf flüssiger Basis. Seine einzigartige Form und sein zeitgemäßes Design machen es zu einer beliebten Wahl für diejenigen, die moderne Ästhetik und Praktikabilität schätzen."}},{"name":"color","value":{"en-GB":"#FFF","de-DE":"#FFF","en-US":"#FFF"}},{"name":"colorlabel","value":{"en-GB":"White","de-DE":"Weiß","en-US":"White"}},{"name":"color-filter","value":{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});

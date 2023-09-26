import type { TProductDraft } from '../../../types';
import walnutCounterStool from './walnut-counter-stool';
describe(`with walnutCounterStool preset`, () => {
  it('should return a sample walnutCounterStool product preset', () => {
    const walnutCounterStoolPreset =
      walnutCounterStool().build<TProductDraft>();
    expect(walnutCounterStoolPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "tables",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "walnut-counter-stool",
      "name": {
            "de-DE": "Barhocker aus Walnussholz",
            "en-GB": "Walnut Counter Stool",
            "en-US": "Walnut Counter Stool"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "barhocker-aus-walnussholz",
            "en-GB": "walnut-counter-stool",
            "en-US": "walnut-counter-stool"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Includes 1 stool","de-DE":"- Beinhaltet 1 Hocker","en-US":"- Includes 1 stool"}},{"name":"product-description","value":{"en-GB":"The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings.","de-DE":"Der Walnusshocker ist aus Walnussholz gefertigt, das für seine Langlebigkeit und Stärke bekannt ist. Der Hocker ist ein einfaches Design mit einer flachen Oberfläche und vier geraden Beinen. Die Beine sind für zusätzliches visuelles Interesse leicht konisch zulaufend. Das Walnussholz kann in seinem natürlichen Zustand belassen oder mit einer Beize oder einem Lack veredelt werden, um die natürliche Schönheit der Holzmaserung hervorzuheben. Der Hocker hat eine quadratische Platte. Insgesamt ist ein Walnusshocker ein vielseitiges und funktionelles Möbelstück, das in einer Vielzahl von Umgebungen verwendet werden kann.","en-US":"The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings."}},{"name":"color-filter","value":{"key":"#964B00","label":{"de-DE":"Dunkelbraun","en-GB":"Dark Brown","en-US":"Dark Brown"}}},{"name":"finishlabel","value":{"en-GB":"Walnut","de-DE":"Nussbaum","en-US":"Walnut"}},{"name":"finish","value":{"en-GB":"#75412E","de-DE":"#75412E","en-US":"#75412E"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});

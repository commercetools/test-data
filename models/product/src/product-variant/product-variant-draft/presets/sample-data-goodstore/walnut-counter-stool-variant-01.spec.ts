import type { TProductVariantDraft } from '../../../types';
import walnutCounterStoolVariant01 from './walnut-counter-stool-variant-01';
describe(`with walnutCounterStoolVariant01 preset`, () => {
  it('should return a sample walnutCounterStoolVariant01 product preset', () => {
    const walnutCounterStoolVariant01Preset =
      walnutCounterStoolVariant01().build<TProductVariantDraft>();
    expect(walnutCounterStoolVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Beinhaltet 1 Hocker",
              "en-GB": "- Includes 1 stool",
              "en-US": "- Includes 1 stool",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Der Walnusshocker ist aus Walnussholz gefertigt, das für seine Langlebigkeit und Stärke bekannt ist. Der Hocker ist ein einfaches Design mit einer flachen Oberfläche und vier geraden Beinen. Die Beine sind für zusätzliches visuelles Interesse leicht konisch zulaufend. Das Walnussholz kann in seinem natürlichen Zustand belassen oder mit einer Beize oder einem Lack veredelt werden, um die natürliche Schönheit der Holzmaserung hervorzuheben. Der Hocker hat eine quadratische Platte. Insgesamt ist ein Walnusshocker ein vielseitiges und funktionelles Möbelstück, das in einer Vielzahl von Umgebungen verwendet werden kann.",
              "en-GB": "The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings.",
              "en-US": "The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#964B00",
              "label": {
                "de-DE": "Dunkelbraun",
                "en-GB": "Dark Brown",
                "en-US": "Dark Brown",
              },
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Nussbaum",
              "en-GB": "Walnut",
              "en-US": "Walnut",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#75412E",
              "en-GB": "#75412E",
              "en-US": "#75412E",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5906,
              "w": 5906,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Walnut%20Counter%20Stool-z5z1HoAa.jpeg",
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
              "centAmount": 8999,
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
              "centAmount": 8999,
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
              "centAmount": 8999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "WCSI-09",
      }
    `);
  });
});

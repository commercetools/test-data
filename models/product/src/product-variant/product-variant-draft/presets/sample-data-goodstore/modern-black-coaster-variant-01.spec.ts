import type { TProductVariantDraft } from '../../../types';
import modernBlackCoasterVariant01 from './modern-black-coaster-variant-01';
describe(`with modernBlackCoasterVariant01 preset`, () => {
  it('should return a sample modernBlackCoasterVariant01 product preset', () => {
    const modernBlackCoasterVariant01Preset =
      modernBlackCoasterVariant01().build<TProductVariantDraft>();
    expect(modernBlackCoasterVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Das Set enthält 4 Untersetzer",
              "en-GB": "- Set includes 4 coasters",
              "en-US": "- Set includes 4 coasters",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein runder schwarzer Untersetzer ist ein kleiner, flacher, scheibenförmiger Gegenstand, der unter ein Trinkglas oder eine Tasse gestellt wird, um die Oberfläche eines Tisches oder anderer Möbel vor Wasserringen oder Spritzern zu schützen. Der Untersetzer hat eine runde Form und eine solide schwarze Farbe, die ihm ein schlankes und minimalistisches Aussehen verleiht. Seine Oberfläche ist glatt, um dem Glas oder der Tasse einen rutschfesten Halt zu bieten. Die Kanten sind mit Ziernähten versehen, die den ästhetischen Reiz des Untersetzers noch verstärken. Insgesamt ist ein runder schwarzer Untersetzer ein funktionales und stilvolles Accessoire, das sich perfekt für jede Wohn- oder Büroumgebung eignet.",
              "en-GB": "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
              "en-US": "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#000",
              "en-GB": "#000",
              "en-US": "#000",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Schwarz",
              "en-GB": "Black",
              "en-US": "Black",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#000",
              "label": {
                "de-DE": "Schwarz",
                "en-GB": "Black",
                "en-US": "Black",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2912,
              "w": 2912,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_45118888-JuHg_hZC.jpeg",
          },
          {
            "dimensions": {
              "h": 2912,
              "w": 2912,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_49535431-zEkdS7Vb.jpeg",
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
              "centAmount": 1999,
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
              "centAmount": 1999,
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
              "centAmount": 1999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "BCOAS-08",
      }
    `);
  });
});

import type { TProductVariantDraft } from '../../../types';
import squareBambooCoasterVariant01 from './square-bamboo-coaster-variant-01';
describe(`with squareBambooCoasterVariant01 preset`, () => {
  it('should return a sample squareBambooCoasterVariant01 product preset', () => {
    const squareBambooCoasterVariant01Preset =
      squareBambooCoasterVariant01().build<TProductVariantDraft>();
    expect(squareBambooCoasterVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Mit einem feuchten Tuch abwischen
      - Das Set enthält 4 Untersetzer",
              "en-GB": "- Wipe clean with wet cloth
      - Set includes 4 coaster",
              "en-US": "- Wipe clean with wet cloth
      - Set includes 4 coaster",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein quadratischer Untersetzer aus Bambus ist eine kleine Matte, die verwendet wird, um Oberflächen vor Wasserflecken oder Beschädigungen durch Trinkgläser oder Tassen zu schützen. Es besteht aus natürlichem Bambusmaterial und hat eine glatte Oberfläche. Der Untersetzer hat eine quadratische Form mit leicht abgerundeten Kanten und misst etwa 3,5 Zoll x 3,5 Zoll. Seine leichte und strapazierfähige Beschaffenheit machen es zu einer beliebten Wahl für legere und formelle Anlässe gleichermaßen.",
              "en-GB": "A square bamboo coaster is a small mat used to protect surfaces from water stains or damage caused by drinking glasses or mugs. It is made of natural bamboo material and has a smooth surface. The coaster is square in shape with slightly rounded edges, and measures approximately 3.5 inches by 3.5 inches. Its lightweight and durable nature make it a popular choice for casual and formal occasions alike.",
              "en-US": "A square bamboo coaster is a small mat used to protect surfaces from water stains or damage caused by drinking glasses or mugs. It is made of natural bamboo material and has a smooth surface. The coaster is square in shape with slightly rounded edges, and measures approximately 3.5 inches by 3.5 inches. Its lightweight and durable nature make it a popular choice for casual and formal occasions alike.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#F5F5DC",
              "label": {
                "de-DE": "Beige",
                "en-GB": "Beige",
                "en-US": "Beige",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_47092846-1MTECqrX.jpeg",
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
              "centAmount": 1099,
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
              "centAmount": 1099,
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
              "centAmount": 1099,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "Bamb-084",
      }
    `);
  });
});

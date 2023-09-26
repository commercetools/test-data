import type { TProductVariantDraft } from '../../../types';
import doubleSidedShotGlassVariant01 from './double-sided-shot-glass-variant-01';
describe(`with doubleSidedShotGlassVariant01 preset`, () => {
  it('should return a sample doubleSidedShotGlassVariant01 product preset', () => {
    const doubleSidedShotGlassVariant01Preset =
      doubleSidedShotGlassVariant01().build<TProductVariantDraft>();
    expect(doubleSidedShotGlassVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Edelstahl
      - Spülmaschinenfest",
              "en-GB": "- Stainless steel
      - Dishwasher safe",
              "en-US": "- Stainless steel
      - Dishwasher safe",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Dieses Stahlschnapsglas besteht aus Stahl und hat zwei Enden, eines zum Messen eines Standardschnapses und das andere zum Messen eines größeren Doppelschnapses. Die Enden sind wie kleine Tassen mit abgerundeten Kanten zum einfachen Ausgießen geformt. Die Stahlkonstruktion macht es langlebig und verschleißfest und bietet gleichzeitig ein elegantes und modernes Erscheinungsbild.",
              "en-GB": "This steel shot glass is made of steel and has two ends, one for measuring a standard shot, and the other for measuring a larger double shot. The ends are shaped like small cups with rounded edges for easy pouring. The steel construction makes it durable and resistant to wear and tear, while also providing a sleek and modern appearance.",
              "en-US": "This steel shot glass is made of steel and has two ends, one for measuring a standard shot, and the other for measuring a larger double shot. The ends are shaped like small cups with rounded edges for easy pouring. The steel construction makes it durable and resistant to wear and tear, while also providing a sleek and modern appearance.",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5472,
              "w": 3648,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_95721248-5HSKgKgr.jpeg",
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
              "centAmount": 299,
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
              "centAmount": 299,
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
              "centAmount": 299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SHOT-095",
      }
    `);
  });
});

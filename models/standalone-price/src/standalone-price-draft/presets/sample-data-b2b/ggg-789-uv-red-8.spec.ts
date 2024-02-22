import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvRed8 from './ggg-789-uv-red-8';

describe(`with ggg789UvRed8 preset`, () => {
  it(`should return a ggg789UvRed8 preset`, () => {
    const ggg789UvRed8Preset = ggg789UvRed8().build<TStandalonePriceDraft>();
    expect(ggg789UvRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-8",
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8250001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ggg789UvRed8 preset when built for graphql`, () => {
    const ggg789UvRed8PresetGraphql =
      ggg789UvRed8().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-8",
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8250001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

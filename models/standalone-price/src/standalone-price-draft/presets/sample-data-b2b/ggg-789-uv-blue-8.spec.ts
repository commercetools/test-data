import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvBlue8 from './ggg-789-uv-blue-8';

describe(`with ggg789UvBlue8 preset`, () => {
  it(`should return a ggg789UvBlue8 preset`, () => {
    const ggg789UvBlue8Preset = ggg789UvBlue8().build<TStandalonePriceDraft>();
    expect(ggg789UvBlue8Preset).toMatchInlineSnapshot(`
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
        "key": "ggg789-uv-blue-8",
        "sku": "ggg789-uv-blue",
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

  it(`should return a ggg789UvBlue8 preset when built for graphql`, () => {
    const ggg789UvBlue8PresetGraphql =
      ggg789UvBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvBlue8PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ggg789-uv-blue-8",
        "sku": "ggg789-uv-blue",
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

import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvRed4 from './ggg-789-uv-red-4';

describe(`with ggg789UvRed4 preset`, () => {
  it(`should return a ggg789UvRed4 preset`, () => {
    const ggg789UvRed4Preset = ggg789UvRed4().build<TStandalonePriceDraft>();
    expect(ggg789UvRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-4",
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ggg789UvRed4 preset when built for graphql`, () => {
    const ggg789UvRed4PresetGraphql =
      ggg789UvRed4().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-4",
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvBlue4 from './ggg-789-uv-blue-4';

describe(`with ggg789UvBlue4 preset`, () => {
  it(`should return a ggg789UvBlue4 preset`, () => {
    const ggg789UvBlue4Preset = ggg789UvBlue4().build<TStandalonePriceDraft>();
    expect(ggg789UvBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-blue-4",
        "sku": "ggg789-uv-blue",
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

  it(`should return a ggg789UvBlue4 preset when built for graphql`, () => {
    const ggg789UvBlue4PresetGraphql =
      ggg789UvBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-blue-4",
        "sku": "ggg789-uv-blue",
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

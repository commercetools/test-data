import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvGreen4 from './ggg-789-uv-green-4';

describe(`with ggg789UvGreen4 preset`, () => {
  it(`should return a ggg789UvGreen4 preset`, () => {
    const ggg789UvGreen4Preset =
      ggg789UvGreen4().build<TStandalonePriceDraft>();
    expect(ggg789UvGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-4",
        "sku": "ggg789-uv-green",
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

  it(`should return a ggg789UvGreen4 preset when built for graphql`, () => {
    const ggg789UvGreen4PresetGraphql =
      ggg789UvGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-4",
        "sku": "ggg789-uv-green",
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

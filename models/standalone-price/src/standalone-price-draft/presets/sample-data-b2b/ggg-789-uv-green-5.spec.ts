import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvGreen5 from './ggg-789-uv-green-5';

describe(`with ggg789UvGreen5 preset`, () => {
  it(`should return a ggg789UvGreen5 preset`, () => {
    const ggg789UvGreen5Preset =
      ggg789UvGreen5().build<TStandalonePriceDraft>();
    expect(ggg789UvGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-5",
        "sku": "ggg789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6750000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ggg789UvGreen5 preset when built for graphql`, () => {
    const ggg789UvGreen5PresetGraphql =
      ggg789UvGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-5",
        "sku": "ggg789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6750000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

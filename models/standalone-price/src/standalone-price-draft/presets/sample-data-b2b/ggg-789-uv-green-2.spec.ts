import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvGreen2 from './ggg-789-uv-green-2';

describe(`with ggg789UvGreen2 preset`, () => {
  it(`should return a ggg789UvGreen2 preset`, () => {
    const ggg789UvGreen2Preset =
      ggg789UvGreen2().build<TStandalonePriceDraft>();
    expect(ggg789UvGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-2",
        "sku": "ggg789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9075001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ggg789UvGreen2 preset when built for graphql`, () => {
    const ggg789UvGreen2PresetGraphql =
      ggg789UvGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-2",
        "sku": "ggg789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9075001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

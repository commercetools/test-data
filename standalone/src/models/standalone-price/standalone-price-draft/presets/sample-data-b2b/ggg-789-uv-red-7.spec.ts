import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvRed7 from './ggg-789-uv-red-7';

describe(`with ggg789UvRed7 preset`, () => {
  it(`should return a ggg789UvRed7 preset`, () => {
    const ggg789UvRed7Preset = ggg789UvRed7().build<TStandalonePriceDraft>();
    expect(ggg789UvRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-7",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ggg789UvRed7 preset when built for graphql`, () => {
    const ggg789UvRed7PresetGraphql =
      ggg789UvRed7().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-7",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

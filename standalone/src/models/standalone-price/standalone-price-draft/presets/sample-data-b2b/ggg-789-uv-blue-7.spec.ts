import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvBlue7 from './ggg-789-uv-blue-7';

describe(`with ggg789UvBlue7 preset`, () => {
  it(`should return a ggg789UvBlue7 preset`, () => {
    const ggg789UvBlue7Preset = ggg789UvBlue7().build<TStandalonePriceDraft>();
    expect(ggg789UvBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-blue-7",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-blue",
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

  it(`should return a ggg789UvBlue7 preset when built for graphql`, () => {
    const ggg789UvBlue7PresetGraphql =
      ggg789UvBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-blue-7",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-blue",
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

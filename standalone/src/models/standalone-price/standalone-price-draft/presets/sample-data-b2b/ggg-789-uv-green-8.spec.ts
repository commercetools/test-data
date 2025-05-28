import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvGreen8 from './ggg-789-uv-green-8';

describe(`with ggg789UvGreen8 preset`, () => {
  it(`should return a ggg789UvGreen8 preset`, () => {
    const ggg789UvGreen8Preset =
      ggg789UvGreen8().build<TStandalonePriceDraft>();
    expect(ggg789UvGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-8",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-green",
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

  it(`should return a ggg789UvGreen8 preset when built for graphql`, () => {
    const ggg789UvGreen8PresetGraphql =
      ggg789UvGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-green-8",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-green",
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

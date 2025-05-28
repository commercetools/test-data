import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvRed6 from './ggg-789-uv-red-6';

describe(`with ggg789UvRed6 preset`, () => {
  it(`should return a ggg789UvRed6 preset`, () => {
    const ggg789UvRed6Preset = ggg789UvRed6().build<TStandalonePriceDraft>();
    expect(ggg789UvRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-6",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ggg789UvRed6 preset when built for graphql`, () => {
    const ggg789UvRed6PresetGraphql =
      ggg789UvRed6().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-6",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

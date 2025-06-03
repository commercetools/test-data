import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvRed5 from './ggg-789-uv-red-5';

describe(`with ggg789UvRed5 preset`, () => {
  it(`should return a ggg789UvRed5 preset`, () => {
    const ggg789UvRed5Preset = ggg789UvRed5().build<TStandalonePriceDraft>();
    expect(ggg789UvRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-5",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-red",
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

  it(`should return a ggg789UvRed5 preset when built for graphql`, () => {
    const ggg789UvRed5PresetGraphql =
      ggg789UvRed5().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-red-5",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-red",
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

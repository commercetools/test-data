import type { TStandalonePriceDraft } from '../../../types';
import ggg789UvBlue5 from './ggg-789-uv-blue-5';

describe(`with ggg789UvBlue5 preset`, () => {
  it(`should return a ggg789UvBlue5 preset`, () => {
    const ggg789UvBlue5Preset = ggg789UvBlue5().build<TStandalonePriceDraft>();
    expect(ggg789UvBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-blue-5",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-blue",
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

  it(`should return a ggg789UvBlue5 preset when built for graphql`, () => {
    const ggg789UvBlue5PresetGraphql =
      ggg789UvBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(ggg789UvBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ggg789-uv-blue-5",
        "recurrencePolicy": undefined,
        "sku": "ggg789-uv-blue",
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

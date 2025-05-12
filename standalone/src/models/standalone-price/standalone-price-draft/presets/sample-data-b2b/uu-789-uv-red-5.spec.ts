import type { TStandalonePriceDraft } from '../../../types';
import uu789UvRed5 from './uu-789-uv-red-5';

describe(`with uu789UvRed5 preset`, () => {
  it(`should return a uu789UvRed5 preset`, () => {
    const uu789UvRed5Preset = uu789UvRed5().build<TStandalonePriceDraft>();
    expect(uu789UvRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-5",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a uu789UvRed5 preset when built for graphql`, () => {
    const uu789UvRed5PresetGraphql =
      uu789UvRed5().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-5",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import uu789UvBlue5 from './uu-789-uv-blue-5';

describe(`with uu789UvBlue5 preset`, () => {
  it(`should return a uu789UvBlue5 preset`, () => {
    const uu789UvBlue5Preset = uu789UvBlue5().build<TStandalonePriceDraft>();
    expect(uu789UvBlue5Preset).toMatchInlineSnapshot(`
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
        "key": "uu789-uv-blue-5",
        "sku": "uu789-uv-blue",
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

  it(`should return a uu789UvBlue5 preset when built for graphql`, () => {
    const uu789UvBlue5PresetGraphql =
      uu789UvBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvBlue5PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "uu789-uv-blue-5",
        "sku": "uu789-uv-blue",
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

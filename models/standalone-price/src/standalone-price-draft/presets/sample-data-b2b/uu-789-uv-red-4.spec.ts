import type { TStandalonePriceDraft } from '../../../types';
import uu789UvRed4 from './uu-789-uv-red-4';

describe(`with uu789UvRed4 preset`, () => {
  it(`should return a uu789UvRed4 preset`, () => {
    const uu789UvRed4Preset = uu789UvRed4().build<TStandalonePriceDraft>();
    expect(uu789UvRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-4",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a uu789UvRed4 preset when built for graphql`, () => {
    const uu789UvRed4PresetGraphql =
      uu789UvRed4().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-4",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

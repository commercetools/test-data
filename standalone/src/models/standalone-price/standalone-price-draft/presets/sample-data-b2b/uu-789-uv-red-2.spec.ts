import type { TStandalonePriceDraft } from '../../../types';
import uu789UvRed2 from './uu-789-uv-red-2';

describe(`with uu789UvRed2 preset`, () => {
  it(`should return a uu789UvRed2 preset`, () => {
    const uu789UvRed2Preset = uu789UvRed2().build<TStandalonePriceDraft>();
    expect(uu789UvRed2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-2",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2475000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a uu789UvRed2 preset when built for graphql`, () => {
    const uu789UvRed2PresetGraphql =
      uu789UvRed2().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvRed2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-2",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2475000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

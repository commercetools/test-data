import type { TStandalonePriceDraft } from '../../../types';
import uu789UvRed6 from './uu-789-uv-red-6';

describe(`with uu789UvRed6 preset`, () => {
  it(`should return a uu789UvRed6 preset`, () => {
    const uu789UvRed6Preset = uu789UvRed6().build<TStandalonePriceDraft>();
    expect(uu789UvRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-6",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a uu789UvRed6 preset when built for graphql`, () => {
    const uu789UvRed6PresetGraphql =
      uu789UvRed6().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-6",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

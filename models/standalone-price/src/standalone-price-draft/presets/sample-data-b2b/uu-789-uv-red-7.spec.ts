import type { TStandalonePriceDraft } from '../../../types';
import uu789UvRed7 from './uu-789-uv-red-7';

describe(`with uu789UvRed7 preset`, () => {
  it(`should return a uu789UvRed7 preset`, () => {
    const uu789UvRed7Preset = uu789UvRed7().build<TStandalonePriceDraft>();
    expect(uu789UvRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-7",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a uu789UvRed7 preset when built for graphql`, () => {
    const uu789UvRed7PresetGraphql =
      uu789UvRed7().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-7",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

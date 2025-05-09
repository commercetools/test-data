import type { TStandalonePriceDraft } from '../../../types';
import uu789UvRed8 from './uu-789-uv-red-8';

describe(`with uu789UvRed8 preset`, () => {
  it(`should return a uu789UvRed8 preset`, () => {
    const uu789UvRed8Preset = uu789UvRed8().build<TStandalonePriceDraft>();
    expect(uu789UvRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-8",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a uu789UvRed8 preset when built for graphql`, () => {
    const uu789UvRed8PresetGraphql =
      uu789UvRed8().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-8",
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

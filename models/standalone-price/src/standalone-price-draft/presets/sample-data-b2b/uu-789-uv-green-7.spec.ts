import type { TStandalonePriceDraft } from '../../../types';
import uu789UvGreen7 from './uu-789-uv-green-7';

describe(`with uu789UvGreen7 preset`, () => {
  it(`should return a uu789UvGreen7 preset`, () => {
    const uu789UvGreen7Preset = uu789UvGreen7().build<TStandalonePriceDraft>();
    expect(uu789UvGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-green-7",
        "sku": "uu789-uv-green",
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

  it(`should return a uu789UvGreen7 preset when built for graphql`, () => {
    const uu789UvGreen7PresetGraphql =
      uu789UvGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-green-7",
        "sku": "uu789-uv-green",
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

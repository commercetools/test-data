import type { TStandalonePriceDraft } from '../../../types';
import uu789UvBlue8 from './uu-789-uv-blue-8';

describe(`with uu789UvBlue8 preset`, () => {
  it(`should return a uu789UvBlue8 preset`, () => {
    const uu789UvBlue8Preset = uu789UvBlue8().build<TStandalonePriceDraft>();
    expect(uu789UvBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-blue-8",
        "sku": "uu789-uv-blue",
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

  it(`should return a uu789UvBlue8 preset when built for graphql`, () => {
    const uu789UvBlue8PresetGraphql =
      uu789UvBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-blue-8",
        "sku": "uu789-uv-blue",
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

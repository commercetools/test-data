import type { TStandalonePriceDraft } from '../../../types';
import uu789UvBlue2 from './uu-789-uv-blue-2';

describe(`with uu789UvBlue2 preset`, () => {
  it(`should return a uu789UvBlue2 preset`, () => {
    const uu789UvBlue2Preset = uu789UvBlue2().build<TStandalonePriceDraft>();
    expect(uu789UvBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-blue-2",
        "sku": "uu789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a uu789UvBlue2 preset when built for graphql`, () => {
    const uu789UvBlue2PresetGraphql =
      uu789UvBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-blue-2",
        "sku": "uu789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

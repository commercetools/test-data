import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpBlue7 from './ddd-890-op-blue-7';

describe(`with ddd890OpBlue7 preset`, () => {
  it(`should return a ddd890OpBlue7 preset`, () => {
    const ddd890OpBlue7Preset = ddd890OpBlue7().build<TStandalonePriceDraft>();
    expect(ddd890OpBlue7Preset).toMatchInlineSnapshot(`
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
        "key": "ddd890-op-blue-7",
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ddd890OpBlue7 preset when built for graphql`, () => {
    const ddd890OpBlue7PresetGraphql =
      ddd890OpBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpBlue7PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ddd890-op-blue-7",
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

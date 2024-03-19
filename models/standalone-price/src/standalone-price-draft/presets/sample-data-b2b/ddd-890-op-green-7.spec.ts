import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpGreen7 from './ddd-890-op-green-7';

describe(`with ddd890OpGreen7 preset`, () => {
  it(`should return a ddd890OpGreen7 preset`, () => {
    const ddd890OpGreen7Preset =
      ddd890OpGreen7().build<TStandalonePriceDraft>();
    expect(ddd890OpGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-7",
        "sku": "ddd890-op-green",
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

  it(`should return a ddd890OpGreen7 preset when built for graphql`, () => {
    const ddd890OpGreen7PresetGraphql =
      ddd890OpGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-7",
        "sku": "ddd890-op-green",
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

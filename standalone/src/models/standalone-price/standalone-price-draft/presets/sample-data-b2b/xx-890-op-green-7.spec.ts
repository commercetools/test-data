import type { TStandalonePriceDraft } from '../../../types';
import xx890OpGreen7 from './xx-890-op-green-7';

describe(`with xx890OpGreen7 preset`, () => {
  it(`should return a xx890OpGreen7 preset`, () => {
    const xx890OpGreen7Preset = xx890OpGreen7().build<TStandalonePriceDraft>();
    expect(xx890OpGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-7",
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a xx890OpGreen7 preset when built for graphql`, () => {
    const xx890OpGreen7PresetGraphql =
      xx890OpGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-7",
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

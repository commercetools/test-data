import type { TStandalonePriceDraft } from '../../../types';
import xx890OpGreen8 from './xx-890-op-green-8';

describe(`with xx890OpGreen8 preset`, () => {
  it(`should return a xx890OpGreen8 preset`, () => {
    const xx890OpGreen8Preset = xx890OpGreen8().build<TStandalonePriceDraft>();
    expect(xx890OpGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-8",
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5500000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a xx890OpGreen8 preset when built for graphql`, () => {
    const xx890OpGreen8PresetGraphql =
      xx890OpGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-8",
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5500000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

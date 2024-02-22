import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpGreen2 from './ddd-890-op-green-2';

describe(`with ddd890OpGreen2 preset`, () => {
  it(`should return a ddd890OpGreen2 preset`, () => {
    const ddd890OpGreen2Preset =
      ddd890OpGreen2().build<TStandalonePriceDraft>();
    expect(ddd890OpGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-2",
        "sku": "ddd890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9075001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ddd890OpGreen2 preset when built for graphql`, () => {
    const ddd890OpGreen2PresetGraphql =
      ddd890OpGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-2",
        "sku": "ddd890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9075001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

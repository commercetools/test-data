import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpGreen1 from './ddd-890-op-green-1';

describe(`with ddd890OpGreen1 preset`, () => {
  it(`should return a ddd890OpGreen1 preset`, () => {
    const ddd890OpGreen1Preset =
      ddd890OpGreen1().build<TStandalonePriceDraft>();
    expect(ddd890OpGreen1Preset).toMatchInlineSnapshot(`
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
        "key": "ddd890-op-green-1",
        "sku": "ddd890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9900000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ddd890OpGreen1 preset when built for graphql`, () => {
    const ddd890OpGreen1PresetGraphql =
      ddd890OpGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpGreen1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ddd890-op-green-1",
        "sku": "ddd890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9900000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

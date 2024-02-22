import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpGreen6 from './ddd-890-op-green-6';

describe(`with ddd890OpGreen6 preset`, () => {
  it(`should return a ddd890OpGreen6 preset`, () => {
    const ddd890OpGreen6Preset =
      ddd890OpGreen6().build<TStandalonePriceDraft>();
    expect(ddd890OpGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-6",
        "sku": "ddd890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ddd890OpGreen6 preset when built for graphql`, () => {
    const ddd890OpGreen6PresetGraphql =
      ddd890OpGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-6",
        "sku": "ddd890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

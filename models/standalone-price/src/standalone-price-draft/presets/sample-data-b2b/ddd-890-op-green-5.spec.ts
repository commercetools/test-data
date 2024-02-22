import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpGreen5 from './ddd-890-op-green-5';

describe(`with ddd890OpGreen5 preset`, () => {
  it(`should return a ddd890OpGreen5 preset`, () => {
    const ddd890OpGreen5Preset =
      ddd890OpGreen5().build<TStandalonePriceDraft>();
    expect(ddd890OpGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-5",
        "sku": "ddd890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6750000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ddd890OpGreen5 preset when built for graphql`, () => {
    const ddd890OpGreen5PresetGraphql =
      ddd890OpGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-green-5",
        "sku": "ddd890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6750000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

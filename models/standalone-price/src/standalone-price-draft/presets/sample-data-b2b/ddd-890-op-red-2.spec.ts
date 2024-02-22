import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpRed2 from './ddd-890-op-red-2';

describe(`with ddd890OpRed2 preset`, () => {
  it(`should return a ddd890OpRed2 preset`, () => {
    const ddd890OpRed2Preset = ddd890OpRed2().build<TStandalonePriceDraft>();
    expect(ddd890OpRed2Preset).toMatchInlineSnapshot(`
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
        "key": "ddd890-op-red-2",
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7425000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ddd890OpRed2 preset when built for graphql`, () => {
    const ddd890OpRed2PresetGraphql =
      ddd890OpRed2().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpRed2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ddd890-op-red-2",
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7425000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpRed3 from './ddd-890-op-red-3';

describe(`with ddd890OpRed3 preset`, () => {
  it(`should return a ddd890OpRed3 preset`, () => {
    const ddd890OpRed3Preset = ddd890OpRed3().build<TStandalonePriceDraft>();
    expect(ddd890OpRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-3",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9900000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ddd890OpRed3 preset when built for graphql`, () => {
    const ddd890OpRed3PresetGraphql =
      ddd890OpRed3().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-3",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9900000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

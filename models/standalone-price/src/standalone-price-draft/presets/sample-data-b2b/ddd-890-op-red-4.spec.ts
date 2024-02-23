import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpRed4 from './ddd-890-op-red-4';

describe(`with ddd890OpRed4 preset`, () => {
  it(`should return a ddd890OpRed4 preset`, () => {
    const ddd890OpRed4Preset = ddd890OpRed4().build<TStandalonePriceDraft>();
    expect(ddd890OpRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-4",
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ddd890OpRed4 preset when built for graphql`, () => {
    const ddd890OpRed4PresetGraphql =
      ddd890OpRed4().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-4",
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

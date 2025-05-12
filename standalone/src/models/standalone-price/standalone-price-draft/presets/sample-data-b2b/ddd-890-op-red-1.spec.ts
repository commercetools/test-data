import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpRed1 from './ddd-890-op-red-1';

describe(`with ddd890OpRed1 preset`, () => {
  it(`should return a ddd890OpRed1 preset`, () => {
    const ddd890OpRed1Preset = ddd890OpRed1().build<TStandalonePriceDraft>();
    expect(ddd890OpRed1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-1",
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8250000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ddd890OpRed1 preset when built for graphql`, () => {
    const ddd890OpRed1PresetGraphql =
      ddd890OpRed1().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpRed1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-red-1",
        "sku": "ddd890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8250000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

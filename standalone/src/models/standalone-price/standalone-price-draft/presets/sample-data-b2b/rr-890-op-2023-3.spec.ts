import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20233 from './rr-890-op-2023-3';

describe(`with rr890Op20233 preset`, () => {
  it(`should return a rr890Op20233 preset`, () => {
    const rr890Op20233Preset = rr890Op20233().build<TStandalonePriceDraft>();
    expect(rr890Op20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2023-3",
        "sku": "rr890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4620000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a rr890Op20233 preset when built for graphql`, () => {
    const rr890Op20233PresetGraphql =
      rr890Op20233().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2023-3",
        "sku": "rr890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4620000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

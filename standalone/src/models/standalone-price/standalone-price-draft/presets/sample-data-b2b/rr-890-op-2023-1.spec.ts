import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20231 from './rr-890-op-2023-1';

describe(`with rr890Op20231 preset`, () => {
  it(`should return a rr890Op20231 preset`, () => {
    const rr890Op20231Preset = rr890Op20231().build<TStandalonePriceDraft>();
    expect(rr890Op20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2023-1",
        "sku": "rr890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3960000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a rr890Op20231 preset when built for graphql`, () => {
    const rr890Op20231PresetGraphql =
      rr890Op20231().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2023-1",
        "sku": "rr890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3960000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

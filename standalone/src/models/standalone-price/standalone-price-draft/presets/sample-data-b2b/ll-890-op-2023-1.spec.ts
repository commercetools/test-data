import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20231 from './ll-890-op-2023-1';

describe(`with ll890Op20231 preset`, () => {
  it(`should return a ll890Op20231 preset`, () => {
    const ll890Op20231Preset = ll890Op20231().build<TStandalonePriceDraft>();
    expect(ll890Op20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2023-1",
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4620000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ll890Op20231 preset when built for graphql`, () => {
    const ll890Op20231PresetGraphql =
      ll890Op20231().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2023-1",
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4620000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

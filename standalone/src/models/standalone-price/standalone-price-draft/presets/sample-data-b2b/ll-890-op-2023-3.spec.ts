import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20233 from './ll-890-op-2023-3';

describe(`with ll890Op20233 preset`, () => {
  it(`should return a ll890Op20233 preset`, () => {
    const ll890Op20233Preset = ll890Op20233().build<TStandalonePriceDraft>();
    expect(ll890Op20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2023-3",
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5390000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ll890Op20233 preset when built for graphql`, () => {
    const ll890Op20233PresetGraphql =
      ll890Op20233().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2023-3",
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5390000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

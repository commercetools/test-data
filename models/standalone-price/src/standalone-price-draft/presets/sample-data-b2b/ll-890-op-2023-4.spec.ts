import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20234 from './ll-890-op-2023-4';

describe(`with ll890Op20234 preset`, () => {
  it(`should return a ll890Op20234 preset`, () => {
    const ll890Op20234Preset = ll890Op20234().build<TStandalonePriceDraft>();
    expect(ll890Op20234Preset).toMatchInlineSnapshot(`
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
        "key": "ll890-op-2023-4",
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ll890Op20234 preset when built for graphql`, () => {
    const ll890Op20234PresetGraphql =
      ll890Op20234().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20234PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ll890-op-2023-4",
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

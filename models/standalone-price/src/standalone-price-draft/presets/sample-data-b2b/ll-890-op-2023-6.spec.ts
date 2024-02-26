import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20236 from './ll-890-op-2023-6';

describe(`with ll890Op20236 preset`, () => {
  it(`should return a ll890Op20236 preset`, () => {
    const ll890Op20236Preset = ll890Op20236().build<TStandalonePriceDraft>();
    expect(ll890Op20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2023-6",
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ll890Op20236 preset when built for graphql`, () => {
    const ll890Op20236PresetGraphql =
      ll890Op20236().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2023-6",
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

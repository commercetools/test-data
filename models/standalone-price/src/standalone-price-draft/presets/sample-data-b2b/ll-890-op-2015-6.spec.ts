import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20156 from './ll-890-op-2015-6';

describe(`with ll890Op20156 preset`, () => {
  it(`should return a ll890Op20156 preset`, () => {
    const ll890Op20156Preset = ll890Op20156().build<TStandalonePriceDraft>();
    expect(ll890Op20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-6",
        "sku": "ll890-op-2015",
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

  it(`should return a ll890Op20156 preset when built for graphql`, () => {
    const ll890Op20156PresetGraphql =
      ll890Op20156().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2015-6",
        "sku": "ll890-op-2015",
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

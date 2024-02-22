import type { TStandalonePriceDraft } from '../../../types';
import l890Op20195 from './l-890-op-2019-5';

describe(`with l890Op20195 preset`, () => {
  it(`should return a l890Op20195 preset`, () => {
    const l890Op20195Preset = l890Op20195().build<TStandalonePriceDraft>();
    expect(l890Op20195Preset).toMatchInlineSnapshot(`
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
        "key": "l890-op-2019-5",
        "sku": "l890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1350000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a l890Op20195 preset when built for graphql`, () => {
    const l890Op20195PresetGraphql =
      l890Op20195().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20195PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "l890-op-2019-5",
        "sku": "l890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1350000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

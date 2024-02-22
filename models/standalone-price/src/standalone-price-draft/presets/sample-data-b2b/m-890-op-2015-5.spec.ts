import type { TStandalonePriceDraft } from '../../../types';
import m890Op20155 from './m-890-op-2015-5';

describe(`with m890Op20155 preset`, () => {
  it(`should return a m890Op20155 preset`, () => {
    const m890Op20155Preset = m890Op20155().build<TStandalonePriceDraft>();
    expect(m890Op20155Preset).toMatchInlineSnapshot(`
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
        "key": "m890-op-2015-5",
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 990000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a m890Op20155 preset when built for graphql`, () => {
    const m890Op20155PresetGraphql =
      m890Op20155().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20155PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "m890-op-2015-5",
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 990000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

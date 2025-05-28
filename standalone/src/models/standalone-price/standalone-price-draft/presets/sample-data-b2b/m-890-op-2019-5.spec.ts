import type { TStandalonePriceDraft } from '../../../types';
import m890Op20195 from './m-890-op-2019-5';

describe(`with m890Op20195 preset`, () => {
  it(`should return a m890Op20195 preset`, () => {
    const m890Op20195Preset = m890Op20195().build<TStandalonePriceDraft>();
    expect(m890Op20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2019-5",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2019",
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

  it(`should return a m890Op20195 preset when built for graphql`, () => {
    const m890Op20195PresetGraphql =
      m890Op20195().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2019-5",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2019",
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

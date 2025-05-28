import type { TStandalonePriceDraft } from '../../../types';
import m890Op20152 from './m-890-op-2015-2';

describe(`with m890Op20152 preset`, () => {
  it(`should return a m890Op20152 preset`, () => {
    const m890Op20152Preset = m890Op20152().build<TStandalonePriceDraft>();
    expect(m890Op20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2015-2",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1089000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a m890Op20152 preset when built for graphql`, () => {
    const m890Op20152PresetGraphql =
      m890Op20152().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2015-2",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1089000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

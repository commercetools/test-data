import type { TStandalonePriceDraft } from '../../../types';
import m890Op20196 from './m-890-op-2019-6';

describe(`with m890Op20196 preset`, () => {
  it(`should return a m890Op20196 preset`, () => {
    const m890Op20196Preset = m890Op20196().build<TStandalonePriceDraft>();
    expect(m890Op20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2019-6",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 880000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a m890Op20196 preset when built for graphql`, () => {
    const m890Op20196PresetGraphql =
      m890Op20196().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2019-6",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 880000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

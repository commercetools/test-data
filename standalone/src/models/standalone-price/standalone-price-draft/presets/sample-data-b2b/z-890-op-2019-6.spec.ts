import type { TStandalonePriceDraft } from '../../../types';
import z890Op20196 from './z-890-op-2019-6';

describe(`with z890Op20196 preset`, () => {
  it(`should return a z890Op20196 preset`, () => {
    const z890Op20196Preset = z890Op20196().build<TStandalonePriceDraft>();
    expect(z890Op20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-6",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2160000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a z890Op20196 preset when built for graphql`, () => {
    const z890Op20196PresetGraphql =
      z890Op20196().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2019-6",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2160000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

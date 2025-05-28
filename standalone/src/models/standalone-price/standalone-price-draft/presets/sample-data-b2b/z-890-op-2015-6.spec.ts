import type { TStandalonePriceDraft } from '../../../types';
import z890Op20156 from './z-890-op-2015-6';

describe(`with z890Op20156 preset`, () => {
  it(`should return a z890Op20156 preset`, () => {
    const z890Op20156Preset = z890Op20156().build<TStandalonePriceDraft>();
    expect(z890Op20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2015-6",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2015",
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

  it(`should return a z890Op20156 preset when built for graphql`, () => {
    const z890Op20156PresetGraphql =
      z890Op20156().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2015-6",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2015",
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

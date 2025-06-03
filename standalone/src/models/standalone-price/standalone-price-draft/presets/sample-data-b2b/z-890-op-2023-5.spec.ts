import type { TStandalonePriceDraft } from '../../../types';
import z890Op20235 from './z-890-op-2023-5';

describe(`with z890Op20235 preset`, () => {
  it(`should return a z890Op20235 preset`, () => {
    const z890Op20235Preset = z890Op20235().build<TStandalonePriceDraft>();
    expect(z890Op20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2023-5",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2430000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a z890Op20235 preset when built for graphql`, () => {
    const z890Op20235PresetGraphql =
      z890Op20235().buildGraphql<TStandalonePriceDraft>();
    expect(z890Op20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "z890-op-2023-5",
        "recurrencePolicy": undefined,
        "sku": "z890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2430000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

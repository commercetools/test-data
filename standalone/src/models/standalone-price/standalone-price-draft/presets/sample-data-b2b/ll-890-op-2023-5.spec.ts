import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20235 from './ll-890-op-2023-5';

describe(`with ll890Op20235 preset`, () => {
  it(`should return a ll890Op20235 preset`, () => {
    const ll890Op20235Preset = ll890Op20235().build<TStandalonePriceDraft>();
    expect(ll890Op20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2023-5",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3150000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ll890Op20235 preset when built for graphql`, () => {
    const ll890Op20235PresetGraphql =
      ll890Op20235().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2023-5",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3150000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import l890Op20235 from './l-890-op-2023-5';

describe(`with l890Op20235 preset`, () => {
  it(`should return a l890Op20235 preset`, () => {
    const l890Op20235Preset = l890Op20235().build<TStandalonePriceDraft>();
    expect(l890Op20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-5",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
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

  it(`should return a l890Op20235 preset when built for graphql`, () => {
    const l890Op20235PresetGraphql =
      l890Op20235().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-5",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
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

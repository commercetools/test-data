import type { TStandalonePriceDraft } from '../../../types';
import hh456St20235 from './hh-456-st-2023-5';

describe(`with hh456St20235 preset`, () => {
  it(`should return a hh456St20235 preset`, () => {
    const hh456St20235Preset = hh456St20235().build<TStandalonePriceDraft>();
    expect(hh456St20235Preset).toMatchInlineSnapshot(`
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
        "key": "hh456-st-2023-5",
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hh456St20235 preset when built for graphql`, () => {
    const hh456St20235PresetGraphql =
      hh456St20235().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20235PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "hh456-st-2023-5",
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

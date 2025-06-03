import type { TStandalonePriceDraft } from '../../../types';
import hh456St20195 from './hh-456-st-2019-5';

describe(`with hh456St20195 preset`, () => {
  it(`should return a hh456St20195 preset`, () => {
    const hh456St20195Preset = hh456St20195().build<TStandalonePriceDraft>();
    expect(hh456St20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2019-5",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2019",
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

  it(`should return a hh456St20195 preset when built for graphql`, () => {
    const hh456St20195PresetGraphql =
      hh456St20195().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2019-5",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2019",
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

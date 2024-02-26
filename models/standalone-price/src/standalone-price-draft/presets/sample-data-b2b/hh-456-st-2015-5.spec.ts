import type { TStandalonePriceDraft } from '../../../types';
import hh456St20155 from './hh-456-st-2015-5';

describe(`with hh456St20155 preset`, () => {
  it(`should return a hh456St20155 preset`, () => {
    const hh456St20155Preset = hh456St20155().build<TStandalonePriceDraft>();
    expect(hh456St20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-5",
        "sku": "hh456-st-2015",
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

  it(`should return a hh456St20155 preset when built for graphql`, () => {
    const hh456St20155PresetGraphql =
      hh456St20155().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-5",
        "sku": "hh456-st-2015",
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

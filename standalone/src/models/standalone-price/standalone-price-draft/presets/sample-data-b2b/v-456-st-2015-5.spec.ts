import type { TStandalonePriceDraft } from '../../../types';
import v456St20155 from './v-456-st-2015-5';

describe(`with v456St20155 preset`, () => {
  it(`should return a v456St20155 preset`, () => {
    const v456St20155Preset = v456St20155().build<TStandalonePriceDraft>();
    expect(v456St20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2015-5",
        "sku": "v456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a v456St20155 preset when built for graphql`, () => {
    const v456St20155PresetGraphql =
      v456St20155().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2015-5",
        "sku": "v456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import v456St20195 from './v-456-st-2019-5';

describe(`with v456St20195 preset`, () => {
  it(`should return a v456St20195 preset`, () => {
    const v456St20195Preset = v456St20195().build<TStandalonePriceDraft>();
    expect(v456St20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2019-5",
        "sku": "v456-st-2019",
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

  it(`should return a v456St20195 preset when built for graphql`, () => {
    const v456St20195PresetGraphql =
      v456St20195().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2019-5",
        "sku": "v456-st-2019",
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

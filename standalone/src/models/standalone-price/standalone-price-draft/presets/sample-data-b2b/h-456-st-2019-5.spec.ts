import type { TStandalonePriceDraft } from '../../../types';
import h456St20195 from './h-456-st-2019-5';

describe(`with h456St20195 preset`, () => {
  it(`should return a h456St20195 preset`, () => {
    const h456St20195Preset = h456St20195().build<TStandalonePriceDraft>();
    expect(h456St20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2019-5",
        "sku": "h456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1080000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a h456St20195 preset when built for graphql`, () => {
    const h456St20195PresetGraphql =
      h456St20195().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2019-5",
        "sku": "h456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1080000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

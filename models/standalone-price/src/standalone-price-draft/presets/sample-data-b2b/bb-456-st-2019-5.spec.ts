import type { TStandalonePriceDraft } from '../../../types';
import bb456St20195 from './bb-456-st-2019-5';

describe(`with bb456St20195 preset`, () => {
  it(`should return a bb456St20195 preset`, () => {
    const bb456St20195Preset = bb456St20195().build<TStandalonePriceDraft>();
    expect(bb456St20195Preset).toMatchInlineSnapshot(`
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
        "key": "bb456-st-2019-5",
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1620000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a bb456St20195 preset when built for graphql`, () => {
    const bb456St20195PresetGraphql =
      bb456St20195().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20195PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "bb456-st-2019-5",
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1620000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

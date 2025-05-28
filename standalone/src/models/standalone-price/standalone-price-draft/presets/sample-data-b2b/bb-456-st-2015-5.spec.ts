import type { TStandalonePriceDraft } from '../../../types';
import bb456St20155 from './bb-456-st-2015-5';

describe(`with bb456St20155 preset`, () => {
  it(`should return a bb456St20155 preset`, () => {
    const bb456St20155Preset = bb456St20155().build<TStandalonePriceDraft>();
    expect(bb456St20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2015-5",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2015",
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

  it(`should return a bb456St20155 preset when built for graphql`, () => {
    const bb456St20155PresetGraphql =
      bb456St20155().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2015-5",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2015",
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

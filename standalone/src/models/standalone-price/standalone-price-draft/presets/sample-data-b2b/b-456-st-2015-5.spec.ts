import type { TStandalonePriceDraft } from '../../../types';
import b456St20155 from './b-456-st-2015-5';

describe(`with b456St20155 preset`, () => {
  it(`should return a b456St20155 preset`, () => {
    const b456St20155Preset = b456St20155().build<TStandalonePriceDraft>();
    expect(b456St20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2015-5",
        "sku": "b456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 855000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a b456St20155 preset when built for graphql`, () => {
    const b456St20155PresetGraphql =
      b456St20155().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2015-5",
        "sku": "b456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 855000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

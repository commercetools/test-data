import type { TStandalonePriceDraft } from '../../../types';
import b456St20154 from './b-456-st-2015-4';

describe(`with b456St20154 preset`, () => {
  it(`should return a b456St20154 preset`, () => {
    const b456St20154Preset = b456St20154().build<TStandalonePriceDraft>();
    expect(b456St20154Preset).toMatchInlineSnapshot(`
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
        "key": "b456-st-2015-4",
        "sku": "b456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 950000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a b456St20154 preset when built for graphql`, () => {
    const b456St20154PresetGraphql =
      b456St20154().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20154PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "b456-st-2015-4",
        "sku": "b456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 950000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

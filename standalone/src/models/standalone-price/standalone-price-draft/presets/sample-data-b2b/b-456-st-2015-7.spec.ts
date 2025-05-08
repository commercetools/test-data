import type { TStandalonePriceDraft } from '../../../types';
import b456St20157 from './b-456-st-2015-7';

describe(`with b456St20157 preset`, () => {
  it(`should return a b456St20157 preset`, () => {
    const b456St20157Preset = b456St20157().build<TStandalonePriceDraft>();
    expect(b456St20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2015-7",
        "sku": "b456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1140000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a b456St20157 preset when built for graphql`, () => {
    const b456St20157PresetGraphql =
      b456St20157().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2015-7",
        "sku": "b456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1140000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import b456St20237 from './b-456-st-2023-7';

describe(`with b456St20237 preset`, () => {
  it(`should return a b456St20237 preset`, () => {
    const b456St20237Preset = b456St20237().build<TStandalonePriceDraft>();
    expect(b456St20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2023-7",
        "sku": "b456-st-2023",
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

  it(`should return a b456St20237 preset when built for graphql`, () => {
    const b456St20237PresetGraphql =
      b456St20237().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2023-7",
        "sku": "b456-st-2023",
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

import type { TStandalonePriceDraft } from '../../../types';
import b456St20238 from './b-456-st-2023-8';

describe(`with b456St20238 preset`, () => {
  it(`should return a b456St20238 preset`, () => {
    const b456St20238Preset = b456St20238().build<TStandalonePriceDraft>();
    expect(b456St20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2023-8",
        "sku": "b456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1045001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a b456St20238 preset when built for graphql`, () => {
    const b456St20238PresetGraphql =
      b456St20238().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2023-8",
        "sku": "b456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1045001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

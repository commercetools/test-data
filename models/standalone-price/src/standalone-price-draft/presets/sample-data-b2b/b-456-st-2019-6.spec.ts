import type { TStandalonePriceDraft } from '../../../types';
import b456St20196 from './b-456-st-2019-6';

describe(`with b456St20196 preset`, () => {
  it(`should return a b456St20196 preset`, () => {
    const b456St20196Preset = b456St20196().build<TStandalonePriceDraft>();
    expect(b456St20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2019-6",
        "sku": "b456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 760000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a b456St20196 preset when built for graphql`, () => {
    const b456St20196PresetGraphql =
      b456St20196().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2019-6",
        "sku": "b456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 760000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

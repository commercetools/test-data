import type { TStandalonePriceDraft } from '../../../types';
import b456St20153 from './b-456-st-2015-3';

describe(`with b456St20153 preset`, () => {
  it(`should return a b456St20153 preset`, () => {
    const b456St20153Preset = b456St20153().build<TStandalonePriceDraft>();
    expect(b456St20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2015-3",
        "sku": "b456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1254000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a b456St20153 preset when built for graphql`, () => {
    const b456St20153PresetGraphql =
      b456St20153().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2015-3",
        "sku": "b456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1254000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

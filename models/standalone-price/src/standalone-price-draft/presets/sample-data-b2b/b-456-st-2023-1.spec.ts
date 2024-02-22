import type { TStandalonePriceDraft } from '../../../types';
import b456St20231 from './b-456-st-2023-1';

describe(`with b456St20231 preset`, () => {
  it(`should return a b456St20231 preset`, () => {
    const b456St20231Preset = b456St20231().build<TStandalonePriceDraft>();
    expect(b456St20231Preset).toMatchInlineSnapshot(`
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
        "key": "b456-st-2023-1",
        "sku": "b456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1254000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a b456St20231 preset when built for graphql`, () => {
    const b456St20231PresetGraphql =
      b456St20231().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20231PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "b456-st-2023-1",
        "sku": "b456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1254000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

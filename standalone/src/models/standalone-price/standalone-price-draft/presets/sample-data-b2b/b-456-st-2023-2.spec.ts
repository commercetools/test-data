import type { TStandalonePriceDraft } from '../../../types';
import b456St20232 from './b-456-st-2023-2';

describe(`with b456St20232 preset`, () => {
  it(`should return a b456St20232 preset`, () => {
    const b456St20232Preset = b456St20232().build<TStandalonePriceDraft>();
    expect(b456St20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2023-2",
        "sku": "b456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1149501,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a b456St20232 preset when built for graphql`, () => {
    const b456St20232PresetGraphql =
      b456St20232().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2023-2",
        "sku": "b456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1149501,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

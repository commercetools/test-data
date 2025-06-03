import type { TStandalonePriceDraft } from '../../../types';
import b456St20233 from './b-456-st-2023-3';

describe(`with b456St20233 preset`, () => {
  it(`should return a b456St20233 preset`, () => {
    const b456St20233Preset = b456St20233().build<TStandalonePriceDraft>();
    expect(b456St20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2023-3",
        "recurrencePolicy": undefined,
        "sku": "b456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1463000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a b456St20233 preset when built for graphql`, () => {
    const b456St20233PresetGraphql =
      b456St20233().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2023-3",
        "recurrencePolicy": undefined,
        "sku": "b456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1463000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

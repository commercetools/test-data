import type { TStandalonePriceDraft } from '../../../types';
import b456St20152 from './b-456-st-2015-2';

describe(`with b456St20152 preset`, () => {
  it(`should return a b456St20152 preset`, () => {
    const b456St20152Preset = b456St20152().build<TStandalonePriceDraft>();
    expect(b456St20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2015-2",
        "recurrencePolicy": undefined,
        "sku": "b456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 940500,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a b456St20152 preset when built for graphql`, () => {
    const b456St20152PresetGraphql =
      b456St20152().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2015-2",
        "recurrencePolicy": undefined,
        "sku": "b456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 940500,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

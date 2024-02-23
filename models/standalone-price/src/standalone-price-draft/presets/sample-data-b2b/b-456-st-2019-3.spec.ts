import type { TStandalonePriceDraft } from '../../../types';
import b456St20193 from './b-456-st-2019-3';

describe(`with b456St20193 preset`, () => {
  it(`should return a b456St20193 preset`, () => {
    const b456St20193Preset = b456St20193().build<TStandalonePriceDraft>();
    expect(b456St20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2019-3",
        "sku": "b456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1358500,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a b456St20193 preset when built for graphql`, () => {
    const b456St20193PresetGraphql =
      b456St20193().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2019-3",
        "sku": "b456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1358500,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

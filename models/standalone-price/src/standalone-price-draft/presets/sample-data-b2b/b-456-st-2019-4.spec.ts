import type { TStandalonePriceDraft } from '../../../types';
import b456St20194 from './b-456-st-2019-4';

describe(`with b456St20194 preset`, () => {
  it(`should return a b456St20194 preset`, () => {
    const b456St20194Preset = b456St20194().build<TStandalonePriceDraft>();
    expect(b456St20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2019-4",
        "sku": "b456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 950000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a b456St20194 preset when built for graphql`, () => {
    const b456St20194PresetGraphql =
      b456St20194().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2019-4",
        "sku": "b456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 950000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import b456St20198 from './b-456-st-2019-8';

describe(`with b456St20198 preset`, () => {
  it(`should return a b456St20198 preset`, () => {
    const b456St20198Preset = b456St20198().build<TStandalonePriceDraft>();
    expect(b456St20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2019-8",
        "recurrencePolicy": undefined,
        "sku": "b456-st-2019",
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

  it(`should return a b456St20198 preset when built for graphql`, () => {
    const b456St20198PresetGraphql =
      b456St20198().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2019-8",
        "recurrencePolicy": undefined,
        "sku": "b456-st-2019",
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

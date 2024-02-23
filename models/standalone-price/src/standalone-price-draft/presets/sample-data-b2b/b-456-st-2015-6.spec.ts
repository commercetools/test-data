import type { TStandalonePriceDraft } from '../../../types';
import b456St20156 from './b-456-st-2015-6';

describe(`with b456St20156 preset`, () => {
  it(`should return a b456St20156 preset`, () => {
    const b456St20156Preset = b456St20156().build<TStandalonePriceDraft>();
    expect(b456St20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2015-6",
        "sku": "b456-st-2015",
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

  it(`should return a b456St20156 preset when built for graphql`, () => {
    const b456St20156PresetGraphql =
      b456St20156().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2015-6",
        "sku": "b456-st-2015",
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

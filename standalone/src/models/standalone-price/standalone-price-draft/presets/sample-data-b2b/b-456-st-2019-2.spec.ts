import type { TStandalonePriceDraft } from '../../../types';
import b456St20192 from './b-456-st-2019-2';

describe(`with b456St20192 preset`, () => {
  it(`should return a b456St20192 preset`, () => {
    const b456St20192Preset = b456St20192().build<TStandalonePriceDraft>();
    expect(b456St20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2019-2",
        "sku": "b456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1045000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a b456St20192 preset when built for graphql`, () => {
    const b456St20192PresetGraphql =
      b456St20192().buildGraphql<TStandalonePriceDraft>();
    expect(b456St20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "b456-st-2019-2",
        "sku": "b456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1045000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

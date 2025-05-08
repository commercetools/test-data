import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20192 from './ll-890-op-2019-2';

describe(`with ll890Op20192 preset`, () => {
  it(`should return a ll890Op20192 preset`, () => {
    const ll890Op20192Preset = ll890Op20192().build<TStandalonePriceDraft>();
    expect(ll890Op20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-2",
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ll890Op20192 preset when built for graphql`, () => {
    const ll890Op20192PresetGraphql =
      ll890Op20192().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-2",
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

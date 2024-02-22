import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20192 from './rr-890-op-2019-2';

describe(`with rr890Op20192 preset`, () => {
  it(`should return a rr890Op20192 preset`, () => {
    const rr890Op20192Preset = rr890Op20192().build<TStandalonePriceDraft>();
    expect(rr890Op20192Preset).toMatchInlineSnapshot(`
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
        "key": "rr890-op-2019-2",
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a rr890Op20192 preset when built for graphql`, () => {
    const rr890Op20192PresetGraphql =
      rr890Op20192().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20192PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "rr890-op-2019-2",
        "sku": "rr890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20156 from './rr-890-op-2015-6';

describe(`with rr890Op20156 preset`, () => {
  it(`should return a rr890Op20156 preset`, () => {
    const rr890Op20156Preset = rr890Op20156().build<TStandalonePriceDraft>();
    expect(rr890Op20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-6",
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a rr890Op20156 preset when built for graphql`, () => {
    const rr890Op20156PresetGraphql =
      rr890Op20156().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2015-6",
        "sku": "rr890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

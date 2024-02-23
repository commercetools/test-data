import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20235 from './rr-890-op-2023-5';

describe(`with rr890Op20235 preset`, () => {
  it(`should return a rr890Op20235 preset`, () => {
    const rr890Op20235Preset = rr890Op20235().build<TStandalonePriceDraft>();
    expect(rr890Op20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2023-5",
        "sku": "rr890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2700000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a rr890Op20235 preset when built for graphql`, () => {
    const rr890Op20235PresetGraphql =
      rr890Op20235().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2023-5",
        "sku": "rr890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2700000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

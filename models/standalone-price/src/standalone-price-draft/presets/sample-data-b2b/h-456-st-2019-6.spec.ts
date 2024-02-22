import type { TStandalonePriceDraft } from '../../../types';
import h456St20196 from './h-456-st-2019-6';

describe(`with h456St20196 preset`, () => {
  it(`should return a h456St20196 preset`, () => {
    const h456St20196Preset = h456St20196().build<TStandalonePriceDraft>();
    expect(h456St20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2019-6",
        "sku": "h456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 960000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a h456St20196 preset when built for graphql`, () => {
    const h456St20196PresetGraphql =
      h456St20196().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2019-6",
        "sku": "h456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 960000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

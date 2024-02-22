import type { TStandalonePriceDraft } from '../../../types';
import h456St20198 from './h-456-st-2019-8';

describe(`with h456St20198 preset`, () => {
  it(`should return a h456St20198 preset`, () => {
    const h456St20198Preset = h456St20198().build<TStandalonePriceDraft>();
    expect(h456St20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2019-8",
        "sku": "h456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a h456St20198 preset when built for graphql`, () => {
    const h456St20198PresetGraphql =
      h456St20198().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2019-8",
        "sku": "h456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

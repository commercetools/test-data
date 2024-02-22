import type { TStandalonePriceDraft } from '../../../types';
import h456St20151 from './h-456-st-2015-1';

describe(`with h456St20151 preset`, () => {
  it(`should return a h456St20151 preset`, () => {
    const h456St20151Preset = h456St20151().build<TStandalonePriceDraft>();
    expect(h456St20151Preset).toMatchInlineSnapshot(`
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
        "key": "h456-st-2015-1",
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a h456St20151 preset when built for graphql`, () => {
    const h456St20151PresetGraphql =
      h456St20151().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20151PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "h456-st-2015-1",
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

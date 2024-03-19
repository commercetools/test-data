import type { TStandalonePriceDraft } from '../../../types';
import h456St20154 from './h-456-st-2015-4';

describe(`with h456St20154 preset`, () => {
  it(`should return a h456St20154 preset`, () => {
    const h456St20154Preset = h456St20154().build<TStandalonePriceDraft>();
    expect(h456St20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2015-4",
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1200000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a h456St20154 preset when built for graphql`, () => {
    const h456St20154PresetGraphql =
      h456St20154().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2015-4",
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1200000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

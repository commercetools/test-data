import type { TStandalonePriceDraft } from '../../../types';
import h456St20234 from './h-456-st-2023-4';

describe(`with h456St20234 preset`, () => {
  it(`should return a h456St20234 preset`, () => {
    const h456St20234Preset = h456St20234().build<TStandalonePriceDraft>();
    expect(h456St20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2023-4",
        "sku": "h456-st-2023",
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

  it(`should return a h456St20234 preset when built for graphql`, () => {
    const h456St20234PresetGraphql =
      h456St20234().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2023-4",
        "sku": "h456-st-2023",
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

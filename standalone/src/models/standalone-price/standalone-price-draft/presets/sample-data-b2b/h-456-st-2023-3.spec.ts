import type { TStandalonePriceDraft } from '../../../types';
import h456St20233 from './h-456-st-2023-3';

describe(`with h456St20233 preset`, () => {
  it(`should return a h456St20233 preset`, () => {
    const h456St20233Preset = h456St20233().build<TStandalonePriceDraft>();
    expect(h456St20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2023-3",
        "sku": "h456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1848000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a h456St20233 preset when built for graphql`, () => {
    const h456St20233PresetGraphql =
      h456St20233().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2023-3",
        "sku": "h456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1848000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

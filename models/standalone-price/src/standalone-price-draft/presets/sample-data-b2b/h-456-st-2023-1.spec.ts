import type { TStandalonePriceDraft } from '../../../types';
import h456St20231 from './h-456-st-2023-1';

describe(`with h456St20231 preset`, () => {
  it(`should return a h456St20231 preset`, () => {
    const h456St20231Preset = h456St20231().build<TStandalonePriceDraft>();
    expect(h456St20231Preset).toMatchInlineSnapshot(`
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
        "key": "h456-st-2023-1",
        "sku": "h456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1584000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a h456St20231 preset when built for graphql`, () => {
    const h456St20231PresetGraphql =
      h456St20231().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20231PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "h456-st-2023-1",
        "sku": "h456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1584000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

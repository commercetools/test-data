import type { TStandalonePriceDraft } from '../../../types';
import h456St20193 from './h-456-st-2019-3';

describe(`with h456St20193 preset`, () => {
  it(`should return a h456St20193 preset`, () => {
    const h456St20193Preset = h456St20193().build<TStandalonePriceDraft>();
    expect(h456St20193Preset).toMatchInlineSnapshot(`
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
        "key": "h456-st-2019-3",
        "sku": "h456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1716000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a h456St20193 preset when built for graphql`, () => {
    const h456St20193PresetGraphql =
      h456St20193().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20193PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "h456-st-2019-3",
        "sku": "h456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1716000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

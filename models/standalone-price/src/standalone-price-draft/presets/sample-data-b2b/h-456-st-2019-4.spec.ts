import type { TStandalonePriceDraft } from '../../../types';
import h456St20194 from './h-456-st-2019-4';

describe(`with h456St20194 preset`, () => {
  it(`should return a h456St20194 preset`, () => {
    const h456St20194Preset = h456St20194().build<TStandalonePriceDraft>();
    expect(h456St20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2019-4",
        "sku": "h456-st-2019",
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

  it(`should return a h456St20194 preset when built for graphql`, () => {
    const h456St20194PresetGraphql =
      h456St20194().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2019-4",
        "sku": "h456-st-2019",
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

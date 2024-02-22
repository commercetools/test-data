import type { TStandalonePriceDraft } from '../../../types';
import h456St20191 from './h-456-st-2019-1';

describe(`with h456St20191 preset`, () => {
  it(`should return a h456St20191 preset`, () => {
    const h456St20191Preset = h456St20191().build<TStandalonePriceDraft>();
    expect(h456St20191Preset).toMatchInlineSnapshot(`
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
        "key": "h456-st-2019-1",
        "sku": "h456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1452000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a h456St20191 preset when built for graphql`, () => {
    const h456St20191PresetGraphql =
      h456St20191().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20191PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "h456-st-2019-1",
        "sku": "h456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1452000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

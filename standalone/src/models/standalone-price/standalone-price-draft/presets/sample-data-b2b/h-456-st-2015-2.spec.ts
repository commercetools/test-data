import type { TStandalonePriceDraft } from '../../../types';
import h456St20152 from './h-456-st-2015-2';

describe(`with h456St20152 preset`, () => {
  it(`should return a h456St20152 preset`, () => {
    const h456St20152Preset = h456St20152().build<TStandalonePriceDraft>();
    expect(h456St20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2015-2",
        "recurrencePolicy": undefined,
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1188000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a h456St20152 preset when built for graphql`, () => {
    const h456St20152PresetGraphql =
      h456St20152().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2015-2",
        "recurrencePolicy": undefined,
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1188000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

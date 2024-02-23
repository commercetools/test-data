import type { TStandalonePriceDraft } from '../../../types';
import v456St20152 from './v-456-st-2015-2';

describe(`with v456St20152 preset`, () => {
  it(`should return a v456St20152 preset`, () => {
    const v456St20152Preset = v456St20152().build<TStandalonePriceDraft>();
    expect(v456St20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2015-2",
        "sku": "v456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2475000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a v456St20152 preset when built for graphql`, () => {
    const v456St20152PresetGraphql =
      v456St20152().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2015-2",
        "sku": "v456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2475000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

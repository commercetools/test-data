import type { TStandalonePriceDraft } from '../../../types';
import v456St20153 from './v-456-st-2015-3';

describe(`with v456St20153 preset`, () => {
  it(`should return a v456St20153 preset`, () => {
    const v456St20153Preset = v456St20153().build<TStandalonePriceDraft>();
    expect(v456St20153Preset).toMatchInlineSnapshot(`
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
        "key": "v456-st-2015-3",
        "sku": "v456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a v456St20153 preset when built for graphql`, () => {
    const v456St20153PresetGraphql =
      v456St20153().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20153PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "v456-st-2015-3",
        "sku": "v456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import v456St20151 from './v-456-st-2015-1';

describe(`with v456St20151 preset`, () => {
  it(`should return a v456St20151 preset`, () => {
    const v456St20151Preset = v456St20151().build<TStandalonePriceDraft>();
    expect(v456St20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2015-1",
        "sku": "v456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a v456St20151 preset when built for graphql`, () => {
    const v456St20151PresetGraphql =
      v456St20151().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2015-1",
        "sku": "v456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

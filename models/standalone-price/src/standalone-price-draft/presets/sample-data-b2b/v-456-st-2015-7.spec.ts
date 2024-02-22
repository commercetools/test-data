import type { TStandalonePriceDraft } from '../../../types';
import v456St20157 from './v-456-st-2015-7';

describe(`with v456St20157 preset`, () => {
  it(`should return a v456St20157 preset`, () => {
    const v456St20157Preset = v456St20157().build<TStandalonePriceDraft>();
    expect(v456St20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2015-7",
        "sku": "v456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a v456St20157 preset when built for graphql`, () => {
    const v456St20157PresetGraphql =
      v456St20157().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2015-7",
        "sku": "v456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

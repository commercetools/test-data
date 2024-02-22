import type { TStandalonePriceDraft } from '../../../types';
import v456St20196 from './v-456-st-2019-6';

describe(`with v456St20196 preset`, () => {
  it(`should return a v456St20196 preset`, () => {
    const v456St20196Preset = v456St20196().build<TStandalonePriceDraft>();
    expect(v456St20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2019-6",
        "sku": "v456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a v456St20196 preset when built for graphql`, () => {
    const v456St20196PresetGraphql =
      v456St20196().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2019-6",
        "sku": "v456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

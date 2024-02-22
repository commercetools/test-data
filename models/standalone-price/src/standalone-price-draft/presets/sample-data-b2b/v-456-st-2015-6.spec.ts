import type { TStandalonePriceDraft } from '../../../types';
import v456St20156 from './v-456-st-2015-6';

describe(`with v456St20156 preset`, () => {
  it(`should return a v456St20156 preset`, () => {
    const v456St20156Preset = v456St20156().build<TStandalonePriceDraft>();
    expect(v456St20156Preset).toMatchInlineSnapshot(`
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
        "key": "v456-st-2015-6",
        "sku": "v456-st-2015",
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

  it(`should return a v456St20156 preset when built for graphql`, () => {
    const v456St20156PresetGraphql =
      v456St20156().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20156PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "v456-st-2015-6",
        "sku": "v456-st-2015",
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

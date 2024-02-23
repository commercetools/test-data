import type { TStandalonePriceDraft } from '../../../types';
import h456St20156 from './h-456-st-2015-6';

describe(`with h456St20156 preset`, () => {
  it(`should return a h456St20156 preset`, () => {
    const h456St20156Preset = h456St20156().build<TStandalonePriceDraft>();
    expect(h456St20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2015-6",
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 960000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a h456St20156 preset when built for graphql`, () => {
    const h456St20156PresetGraphql =
      h456St20156().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2015-6",
        "sku": "h456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 960000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

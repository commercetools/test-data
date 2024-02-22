import type { TStandalonePriceDraft } from '../../../types';
import hh456St20196 from './hh-456-st-2019-6';

describe(`with hh456St20196 preset`, () => {
  it(`should return a hh456St20196 preset`, () => {
    const hh456St20196Preset = hh456St20196().build<TStandalonePriceDraft>();
    expect(hh456St20196Preset).toMatchInlineSnapshot(`
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
        "key": "hh456-st-2019-6",
        "sku": "hh456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hh456St20196 preset when built for graphql`, () => {
    const hh456St20196PresetGraphql =
      hh456St20196().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20196PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "hh456-st-2019-6",
        "sku": "hh456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

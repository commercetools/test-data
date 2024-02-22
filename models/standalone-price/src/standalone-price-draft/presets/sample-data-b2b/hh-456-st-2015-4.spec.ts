import type { TStandalonePriceDraft } from '../../../types';
import hh456St20154 from './hh-456-st-2015-4';

describe(`with hh456St20154 preset`, () => {
  it(`should return a hh456St20154 preset`, () => {
    const hh456St20154Preset = hh456St20154().build<TStandalonePriceDraft>();
    expect(hh456St20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-4",
        "sku": "hh456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a hh456St20154 preset when built for graphql`, () => {
    const hh456St20154PresetGraphql =
      hh456St20154().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-4",
        "sku": "hh456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

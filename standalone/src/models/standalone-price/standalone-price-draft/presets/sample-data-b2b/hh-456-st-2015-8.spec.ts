import type { TStandalonePriceDraft } from '../../../types';
import hh456St20158 from './hh-456-st-2015-8';

describe(`with hh456St20158 preset`, () => {
  it(`should return a hh456St20158 preset`, () => {
    const hh456St20158Preset = hh456St20158().build<TStandalonePriceDraft>();
    expect(hh456St20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-8",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hh456St20158 preset when built for graphql`, () => {
    const hh456St20158PresetGraphql =
      hh456St20158().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-8",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

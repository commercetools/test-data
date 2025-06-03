import type { TStandalonePriceDraft } from '../../../types';
import hh456St20237 from './hh-456-st-2023-7';

describe(`with hh456St20237 preset`, () => {
  it(`should return a hh456St20237 preset`, () => {
    const hh456St20237Preset = hh456St20237().build<TStandalonePriceDraft>();
    expect(hh456St20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-7",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hh456St20237 preset when built for graphql`, () => {
    const hh456St20237PresetGraphql =
      hh456St20237().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-7",
        "recurrencePolicy": undefined,
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

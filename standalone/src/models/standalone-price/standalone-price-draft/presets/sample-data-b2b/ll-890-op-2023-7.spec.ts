import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20237 from './ll-890-op-2023-7';

describe(`with ll890Op20237 preset`, () => {
  it(`should return a ll890Op20237 preset`, () => {
    const ll890Op20237Preset = ll890Op20237().build<TStandalonePriceDraft>();
    expect(ll890Op20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2023-7",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ll890Op20237 preset when built for graphql`, () => {
    const ll890Op20237PresetGraphql =
      ll890Op20237().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2023-7",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

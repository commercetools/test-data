import type { TStandalonePriceDraft } from '../../../types';
import l890Op20237 from './l-890-op-2023-7';

describe(`with l890Op20237 preset`, () => {
  it(`should return a l890Op20237 preset`, () => {
    const l890Op20237Preset = l890Op20237().build<TStandalonePriceDraft>();
    expect(l890Op20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-7",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a l890Op20237 preset when built for graphql`, () => {
    const l890Op20237PresetGraphql =
      l890Op20237().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2023-7",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

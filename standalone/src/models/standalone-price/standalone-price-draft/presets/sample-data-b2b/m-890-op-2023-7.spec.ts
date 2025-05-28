import type { TStandalonePriceDraft } from '../../../types';
import m890Op20237 from './m-890-op-2023-7';

describe(`with m890Op20237 preset`, () => {
  it(`should return a m890Op20237 preset`, () => {
    const m890Op20237Preset = m890Op20237().build<TStandalonePriceDraft>();
    expect(m890Op20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2023-7",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a m890Op20237 preset when built for graphql`, () => {
    const m890Op20237PresetGraphql =
      m890Op20237().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2023-7",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

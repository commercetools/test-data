import type { TStandalonePriceDraft } from '../../../types';
import v456St20237 from './v-456-st-2023-7';

describe(`with v456St20237 preset`, () => {
  it(`should return a v456St20237 preset`, () => {
    const v456St20237Preset = v456St20237().build<TStandalonePriceDraft>();
    expect(v456St20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-7",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a v456St20237 preset when built for graphql`, () => {
    const v456St20237PresetGraphql =
      v456St20237().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-7",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import bb456St20237 from './bb-456-st-2023-7';

describe(`with bb456St20237 preset`, () => {
  it(`should return a bb456St20237 preset`, () => {
    const bb456St20237Preset = bb456St20237().build<TStandalonePriceDraft>();
    expect(bb456St20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-7",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2160000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a bb456St20237 preset when built for graphql`, () => {
    const bb456St20237PresetGraphql =
      bb456St20237().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-7",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2160000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import nn456St20237 from './nn-456-st-2023-7';

describe(`with nn456St20237 preset`, () => {
  it(`should return a nn456St20237 preset`, () => {
    const nn456St20237Preset = nn456St20237().build<TStandalonePriceDraft>();
    expect(nn456St20237Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-7",
        "sku": "nn456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2640000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a nn456St20237 preset when built for graphql`, () => {
    const nn456St20237PresetGraphql =
      nn456St20237().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20237PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-7",
        "sku": "nn456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2640000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

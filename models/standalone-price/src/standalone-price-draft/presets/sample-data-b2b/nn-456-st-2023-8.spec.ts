import type { TStandalonePriceDraft } from '../../../types';
import nn456St20238 from './nn-456-st-2023-8';

describe(`with nn456St20238 preset`, () => {
  it(`should return a nn456St20238 preset`, () => {
    const nn456St20238Preset = nn456St20238().build<TStandalonePriceDraft>();
    expect(nn456St20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-8",
        "sku": "nn456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a nn456St20238 preset when built for graphql`, () => {
    const nn456St20238PresetGraphql =
      nn456St20238().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-8",
        "sku": "nn456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

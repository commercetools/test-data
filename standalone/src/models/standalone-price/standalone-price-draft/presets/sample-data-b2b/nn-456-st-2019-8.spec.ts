import type { TStandalonePriceDraft } from '../../../types';
import nn456St20198 from './nn-456-st-2019-8';

describe(`with nn456St20198 preset`, () => {
  it(`should return a nn456St20198 preset`, () => {
    const nn456St20198Preset = nn456St20198().build<TStandalonePriceDraft>();
    expect(nn456St20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-8",
        "sku": "nn456-st-2019",
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

  it(`should return a nn456St20198 preset when built for graphql`, () => {
    const nn456St20198PresetGraphql =
      nn456St20198().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-8",
        "sku": "nn456-st-2019",
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

import type { TStandalonePriceDraft } from '../../../types';
import nn456St20196 from './nn-456-st-2019-6';

describe(`with nn456St20196 preset`, () => {
  it(`should return a nn456St20196 preset`, () => {
    const nn456St20196Preset = nn456St20196().build<TStandalonePriceDraft>();
    expect(nn456St20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-6",
        "sku": "nn456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1760000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a nn456St20196 preset when built for graphql`, () => {
    const nn456St20196PresetGraphql =
      nn456St20196().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-6",
        "sku": "nn456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1760000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

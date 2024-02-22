import type { TStandalonePriceDraft } from '../../../types';
import nn456St20234 from './nn-456-st-2023-4';

describe(`with nn456St20234 preset`, () => {
  it(`should return a nn456St20234 preset`, () => {
    const nn456St20234Preset = nn456St20234().build<TStandalonePriceDraft>();
    expect(nn456St20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-4",
        "sku": "nn456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a nn456St20234 preset when built for graphql`, () => {
    const nn456St20234PresetGraphql =
      nn456St20234().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-4",
        "sku": "nn456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

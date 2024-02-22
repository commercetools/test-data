import type { TStandalonePriceDraft } from '../../../types';
import nn456St20232 from './nn-456-st-2023-2';

describe(`with nn456St20232 preset`, () => {
  it(`should return a nn456St20232 preset`, () => {
    const nn456St20232Preset = nn456St20232().build<TStandalonePriceDraft>();
    expect(nn456St20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-2",
        "sku": "nn456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2662000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a nn456St20232 preset when built for graphql`, () => {
    const nn456St20232PresetGraphql =
      nn456St20232().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-2",
        "sku": "nn456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2662000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

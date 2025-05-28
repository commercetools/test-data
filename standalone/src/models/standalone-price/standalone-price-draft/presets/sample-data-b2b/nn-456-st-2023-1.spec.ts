import type { TStandalonePriceDraft } from '../../../types';
import nn456St20231 from './nn-456-st-2023-1';

describe(`with nn456St20231 preset`, () => {
  it(`should return a nn456St20231 preset`, () => {
    const nn456St20231Preset = nn456St20231().build<TStandalonePriceDraft>();
    expect(nn456St20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-1",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2904000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a nn456St20231 preset when built for graphql`, () => {
    const nn456St20231PresetGraphql =
      nn456St20231().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-1",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2904000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

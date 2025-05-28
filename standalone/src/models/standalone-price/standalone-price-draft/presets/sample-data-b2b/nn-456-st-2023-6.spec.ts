import type { TStandalonePriceDraft } from '../../../types';
import nn456St20236 from './nn-456-st-2023-6';

describe(`with nn456St20236 preset`, () => {
  it(`should return a nn456St20236 preset`, () => {
    const nn456St20236Preset = nn456St20236().build<TStandalonePriceDraft>();
    expect(nn456St20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-6",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2023",
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

  it(`should return a nn456St20236 preset when built for graphql`, () => {
    const nn456St20236PresetGraphql =
      nn456St20236().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-6",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2023",
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

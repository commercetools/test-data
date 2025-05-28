import type { TStandalonePriceDraft } from '../../../types';
import nn456St20235 from './nn-456-st-2023-5';

describe(`with nn456St20235 preset`, () => {
  it(`should return a nn456St20235 preset`, () => {
    const nn456St20235Preset = nn456St20235().build<TStandalonePriceDraft>();
    expect(nn456St20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-5",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a nn456St20235 preset when built for graphql`, () => {
    const nn456St20235PresetGraphql =
      nn456St20235().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2023-5",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

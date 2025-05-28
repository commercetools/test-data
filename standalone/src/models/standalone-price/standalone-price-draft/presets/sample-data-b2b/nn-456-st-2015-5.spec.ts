import type { TStandalonePriceDraft } from '../../../types';
import nn456St20155 from './nn-456-st-2015-5';

describe(`with nn456St20155 preset`, () => {
  it(`should return a nn456St20155 preset`, () => {
    const nn456St20155Preset = nn456St20155().build<TStandalonePriceDraft>();
    expect(nn456St20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-5",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2015",
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

  it(`should return a nn456St20155 preset when built for graphql`, () => {
    const nn456St20155PresetGraphql =
      nn456St20155().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-5",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2015",
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

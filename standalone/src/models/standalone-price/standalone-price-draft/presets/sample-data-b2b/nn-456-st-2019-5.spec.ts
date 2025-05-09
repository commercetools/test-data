import type { TStandalonePriceDraft } from '../../../types';
import nn456St20195 from './nn-456-st-2019-5';

describe(`with nn456St20195 preset`, () => {
  it(`should return a nn456St20195 preset`, () => {
    const nn456St20195Preset = nn456St20195().build<TStandalonePriceDraft>();
    expect(nn456St20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-5",
        "sku": "nn456-st-2019",
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

  it(`should return a nn456St20195 preset when built for graphql`, () => {
    const nn456St20195PresetGraphql =
      nn456St20195().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-5",
        "sku": "nn456-st-2019",
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

import type { TStandalonePriceDraft } from '../../../types';
import nn456St20154 from './nn-456-st-2015-4';

describe(`with nn456St20154 preset`, () => {
  it(`should return a nn456St20154 preset`, () => {
    const nn456St20154Preset = nn456St20154().build<TStandalonePriceDraft>();
    expect(nn456St20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-4",
        "sku": "nn456-st-2015",
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

  it(`should return a nn456St20154 preset when built for graphql`, () => {
    const nn456St20154PresetGraphql =
      nn456St20154().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-4",
        "sku": "nn456-st-2015",
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

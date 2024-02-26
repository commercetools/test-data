import type { TStandalonePriceDraft } from '../../../types';
import nn456St20194 from './nn-456-st-2019-4';

describe(`with nn456St20194 preset`, () => {
  it(`should return a nn456St20194 preset`, () => {
    const nn456St20194Preset = nn456St20194().build<TStandalonePriceDraft>();
    expect(nn456St20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-4",
        "sku": "nn456-st-2019",
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

  it(`should return a nn456St20194 preset when built for graphql`, () => {
    const nn456St20194PresetGraphql =
      nn456St20194().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-4",
        "sku": "nn456-st-2019",
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

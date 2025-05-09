import type { TStandalonePriceDraft } from '../../../types';
import nn456St20191 from './nn-456-st-2019-1';

describe(`with nn456St20191 preset`, () => {
  it(`should return a nn456St20191 preset`, () => {
    const nn456St20191Preset = nn456St20191().build<TStandalonePriceDraft>();
    expect(nn456St20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-1",
        "sku": "nn456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2662000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a nn456St20191 preset when built for graphql`, () => {
    const nn456St20191PresetGraphql =
      nn456St20191().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-1",
        "sku": "nn456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2662000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

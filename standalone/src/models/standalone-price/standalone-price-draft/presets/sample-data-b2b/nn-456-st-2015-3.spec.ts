import type { TStandalonePriceDraft } from '../../../types';
import nn456St20153 from './nn-456-st-2015-3';

describe(`with nn456St20153 preset`, () => {
  it(`should return a nn456St20153 preset`, () => {
    const nn456St20153Preset = nn456St20153().build<TStandalonePriceDraft>();
    expect(nn456St20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-3",
        "sku": "nn456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2904000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a nn456St20153 preset when built for graphql`, () => {
    const nn456St20153PresetGraphql =
      nn456St20153().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-3",
        "sku": "nn456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2904000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

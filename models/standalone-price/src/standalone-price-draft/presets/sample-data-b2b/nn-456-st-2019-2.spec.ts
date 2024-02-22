import type { TStandalonePriceDraft } from '../../../types';
import nn456St20192 from './nn-456-st-2019-2';

describe(`with nn456St20192 preset`, () => {
  it(`should return a nn456St20192 preset`, () => {
    const nn456St20192Preset = nn456St20192().build<TStandalonePriceDraft>();
    expect(nn456St20192Preset).toMatchInlineSnapshot(`
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
        "key": "nn456-st-2019-2",
        "sku": "nn456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a nn456St20192 preset when built for graphql`, () => {
    const nn456St20192PresetGraphql =
      nn456St20192().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20192PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "nn456-st-2019-2",
        "sku": "nn456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

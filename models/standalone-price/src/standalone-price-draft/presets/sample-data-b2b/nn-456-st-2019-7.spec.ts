import type { TStandalonePriceDraft } from '../../../types';
import nn456St20197 from './nn-456-st-2019-7';

describe(`with nn456St20197 preset`, () => {
  it(`should return a nn456St20197 preset`, () => {
    const nn456St20197Preset = nn456St20197().build<TStandalonePriceDraft>();
    expect(nn456St20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-7",
        "sku": "nn456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2640000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a nn456St20197 preset when built for graphql`, () => {
    const nn456St20197PresetGraphql =
      nn456St20197().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-7",
        "sku": "nn456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2640000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

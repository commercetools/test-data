import type { TStandalonePriceDraft } from '../../../types';
import nn456St20157 from './nn-456-st-2015-7';

describe(`with nn456St20157 preset`, () => {
  it(`should return a nn456St20157 preset`, () => {
    const nn456St20157Preset = nn456St20157().build<TStandalonePriceDraft>();
    expect(nn456St20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-7",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2015",
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

  it(`should return a nn456St20157 preset when built for graphql`, () => {
    const nn456St20157PresetGraphql =
      nn456St20157().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-7",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2015",
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

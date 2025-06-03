import type { TStandalonePriceDraft } from '../../../types';
import nn456St20151 from './nn-456-st-2015-1';

describe(`with nn456St20151 preset`, () => {
  it(`should return a nn456St20151 preset`, () => {
    const nn456St20151Preset = nn456St20151().build<TStandalonePriceDraft>();
    expect(nn456St20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-1",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a nn456St20151 preset when built for graphql`, () => {
    const nn456St20151PresetGraphql =
      nn456St20151().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-1",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

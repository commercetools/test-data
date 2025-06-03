import type { TStandalonePriceDraft } from '../../../types';
import nn456St20152 from './nn-456-st-2015-2';

describe(`with nn456St20152 preset`, () => {
  it(`should return a nn456St20152 preset`, () => {
    const nn456St20152Preset = nn456St20152().build<TStandalonePriceDraft>();
    expect(nn456St20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-2",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2178000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a nn456St20152 preset when built for graphql`, () => {
    const nn456St20152PresetGraphql =
      nn456St20152().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-2",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2178000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

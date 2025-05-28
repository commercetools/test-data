import type { TStandalonePriceDraft } from '../../../types';
import nn456St20193 from './nn-456-st-2019-3';

describe(`with nn456St20193 preset`, () => {
  it(`should return a nn456St20193 preset`, () => {
    const nn456St20193Preset = nn456St20193().build<TStandalonePriceDraft>();
    expect(nn456St20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-3",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3146000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a nn456St20193 preset when built for graphql`, () => {
    const nn456St20193PresetGraphql =
      nn456St20193().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2019-3",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3146000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

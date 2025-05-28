import type { TStandalonePriceDraft } from '../../../types';
import nn456St20156 from './nn-456-st-2015-6';

describe(`with nn456St20156 preset`, () => {
  it(`should return a nn456St20156 preset`, () => {
    const nn456St20156Preset = nn456St20156().build<TStandalonePriceDraft>();
    expect(nn456St20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-6",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1760000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a nn456St20156 preset when built for graphql`, () => {
    const nn456St20156PresetGraphql =
      nn456St20156().buildGraphql<TStandalonePriceDraft>();
    expect(nn456St20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "nn456-st-2015-6",
        "recurrencePolicy": undefined,
        "sku": "nn456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1760000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

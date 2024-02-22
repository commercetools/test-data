import type { TStandalonePriceDraft } from '../../../types';
import bb456St20152 from './bb-456-st-2015-2';

describe(`with bb456St20152 preset`, () => {
  it(`should return a bb456St20152 preset`, () => {
    const bb456St20152Preset = bb456St20152().build<TStandalonePriceDraft>();
    expect(bb456St20152Preset).toMatchInlineSnapshot(`
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
        "key": "bb456-st-2015-2",
        "sku": "bb456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1782000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a bb456St20152 preset when built for graphql`, () => {
    const bb456St20152PresetGraphql =
      bb456St20152().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20152PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "bb456-st-2015-2",
        "sku": "bb456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1782000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

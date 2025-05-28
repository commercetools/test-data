import type { TStandalonePriceDraft } from '../../../types';
import ww567YzRed4 from './ww-567-yz-red-4';

describe(`with ww567YzRed4 preset`, () => {
  it(`should return a ww567YzRed4 preset`, () => {
    const ww567YzRed4Preset = ww567YzRed4().build<TStandalonePriceDraft>();
    expect(ww567YzRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-4",
        "recurrencePolicy": undefined,
        "sku": "ww567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ww567YzRed4 preset when built for graphql`, () => {
    const ww567YzRed4PresetGraphql =
      ww567YzRed4().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-4",
        "recurrencePolicy": undefined,
        "sku": "ww567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

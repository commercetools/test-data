import type { TStandalonePriceDraft } from '../../../types';
import ww567YzGreen4 from './ww-567-yz-green-4';

describe(`with ww567YzGreen4 preset`, () => {
  it(`should return a ww567YzGreen4 preset`, () => {
    const ww567YzGreen4Preset = ww567YzGreen4().build<TStandalonePriceDraft>();
    expect(ww567YzGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-green-4",
        "recurrencePolicy": undefined,
        "sku": "ww567-yz-green",
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

  it(`should return a ww567YzGreen4 preset when built for graphql`, () => {
    const ww567YzGreen4PresetGraphql =
      ww567YzGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-green-4",
        "recurrencePolicy": undefined,
        "sku": "ww567-yz-green",
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

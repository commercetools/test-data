import type { TStandalonePriceDraft } from '../../../types';
import ww567YzGreen6 from './ww-567-yz-green-6';

describe(`with ww567YzGreen6 preset`, () => {
  it(`should return a ww567YzGreen6 preset`, () => {
    const ww567YzGreen6Preset = ww567YzGreen6().build<TStandalonePriceDraft>();
    expect(ww567YzGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-green-6",
        "recurrencePolicy": undefined,
        "sku": "ww567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ww567YzGreen6 preset when built for graphql`, () => {
    const ww567YzGreen6PresetGraphql =
      ww567YzGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-green-6",
        "recurrencePolicy": undefined,
        "sku": "ww567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import ww567YzRed2 from './ww-567-yz-red-2';

describe(`with ww567YzRed2 preset`, () => {
  it(`should return a ww567YzRed2 preset`, () => {
    const ww567YzRed2Preset = ww567YzRed2().build<TStandalonePriceDraft>();
    expect(ww567YzRed2Preset).toMatchInlineSnapshot(`
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
        "key": "ww567-yz-red-2",
        "sku": "ww567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4455000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ww567YzRed2 preset when built for graphql`, () => {
    const ww567YzRed2PresetGraphql =
      ww567YzRed2().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzRed2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ww567-yz-red-2",
        "sku": "ww567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4455000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

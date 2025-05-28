import type { TStandalonePriceDraft } from '../../../types';
import ww567YzGreen3 from './ww-567-yz-green-3';

describe(`with ww567YzGreen3 preset`, () => {
  it(`should return a ww567YzGreen3 preset`, () => {
    const ww567YzGreen3Preset = ww567YzGreen3().build<TStandalonePriceDraft>();
    expect(ww567YzGreen3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-green-3",
        "recurrencePolicy": undefined,
        "sku": "ww567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6930000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ww567YzGreen3 preset when built for graphql`, () => {
    const ww567YzGreen3PresetGraphql =
      ww567YzGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzGreen3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-green-3",
        "recurrencePolicy": undefined,
        "sku": "ww567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6930000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

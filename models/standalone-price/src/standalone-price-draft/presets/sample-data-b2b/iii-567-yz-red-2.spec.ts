import type { TStandalonePriceDraft } from '../../../types';
import iii567YzRed2 from './iii-567-yz-red-2';

describe(`with iii567YzRed2 preset`, () => {
  it(`should return a iii567YzRed2 preset`, () => {
    const iii567YzRed2Preset = iii567YzRed2().build<TStandalonePriceDraft>();
    expect(iii567YzRed2Preset).toMatchInlineSnapshot(`
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
        "key": "iii567-yz-red-2",
        "sku": "iii567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 11880000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a iii567YzRed2 preset when built for graphql`, () => {
    const iii567YzRed2PresetGraphql =
      iii567YzRed2().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzRed2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "iii567-yz-red-2",
        "sku": "iii567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 11880000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

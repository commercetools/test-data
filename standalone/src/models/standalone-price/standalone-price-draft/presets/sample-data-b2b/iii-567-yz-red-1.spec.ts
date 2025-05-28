import type { TStandalonePriceDraft } from '../../../types';
import iii567YzRed1 from './iii-567-yz-red-1';

describe(`with iii567YzRed1 preset`, () => {
  it(`should return a iii567YzRed1 preset`, () => {
    const iii567YzRed1Preset = iii567YzRed1().build<TStandalonePriceDraft>();
    expect(iii567YzRed1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-red-1",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 13200000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a iii567YzRed1 preset when built for graphql`, () => {
    const iii567YzRed1PresetGraphql =
      iii567YzRed1().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzRed1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-red-1",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 13200000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

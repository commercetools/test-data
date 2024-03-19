import type { TStandalonePriceDraft } from '../../../types';
import iii567YzBlue6 from './iii-567-yz-blue-6';

describe(`with iii567YzBlue6 preset`, () => {
  it(`should return a iii567YzBlue6 preset`, () => {
    const iii567YzBlue6Preset = iii567YzBlue6().build<TStandalonePriceDraft>();
    expect(iii567YzBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-blue-6",
        "sku": "iii567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a iii567YzBlue6 preset when built for graphql`, () => {
    const iii567YzBlue6PresetGraphql =
      iii567YzBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-blue-6",
        "sku": "iii567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import iii567YzRed7 from './iii-567-yz-red-7';

describe(`with iii567YzRed7 preset`, () => {
  it(`should return a iii567YzRed7 preset`, () => {
    const iii567YzRed7Preset = iii567YzRed7().build<TStandalonePriceDraft>();
    expect(iii567YzRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-red-7",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 14400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a iii567YzRed7 preset when built for graphql`, () => {
    const iii567YzRed7PresetGraphql =
      iii567YzRed7().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-red-7",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 14400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

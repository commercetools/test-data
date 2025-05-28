import type { TStandalonePriceDraft } from '../../../types';
import iii567YzBlue7 from './iii-567-yz-blue-7';

describe(`with iii567YzBlue7 preset`, () => {
  it(`should return a iii567YzBlue7 preset`, () => {
    const iii567YzBlue7Preset = iii567YzBlue7().build<TStandalonePriceDraft>();
    expect(iii567YzBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-blue-7",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-blue",
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

  it(`should return a iii567YzBlue7 preset when built for graphql`, () => {
    const iii567YzBlue7PresetGraphql =
      iii567YzBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-blue-7",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-blue",
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

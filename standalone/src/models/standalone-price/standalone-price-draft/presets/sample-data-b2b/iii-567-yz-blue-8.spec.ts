import type { TStandalonePriceDraft } from '../../../types';
import iii567YzBlue8 from './iii-567-yz-blue-8';

describe(`with iii567YzBlue8 preset`, () => {
  it(`should return a iii567YzBlue8 preset`, () => {
    const iii567YzBlue8Preset = iii567YzBlue8().build<TStandalonePriceDraft>();
    expect(iii567YzBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-blue-8",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 13200001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a iii567YzBlue8 preset when built for graphql`, () => {
    const iii567YzBlue8PresetGraphql =
      iii567YzBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-blue-8",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 13200001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

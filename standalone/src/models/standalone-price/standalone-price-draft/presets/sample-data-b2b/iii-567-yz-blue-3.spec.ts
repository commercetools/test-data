import type { TStandalonePriceDraft } from '../../../types';
import iii567YzBlue3 from './iii-567-yz-blue-3';

describe(`with iii567YzBlue3 preset`, () => {
  it(`should return a iii567YzBlue3 preset`, () => {
    const iii567YzBlue3Preset = iii567YzBlue3().build<TStandalonePriceDraft>();
    expect(iii567YzBlue3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-blue-3",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 17160000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a iii567YzBlue3 preset when built for graphql`, () => {
    const iii567YzBlue3PresetGraphql =
      iii567YzBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzBlue3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-blue-3",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 17160000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});

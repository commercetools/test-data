import type { TStandalonePriceDraft } from '../../../types';
import iii567YzRed4 from './iii-567-yz-red-4';

describe(`with iii567YzRed4 preset`, () => {
  it(`should return a iii567YzRed4 preset`, () => {
    const iii567YzRed4Preset = iii567YzRed4().build<TStandalonePriceDraft>();
    expect(iii567YzRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-red-4",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 12000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a iii567YzRed4 preset when built for graphql`, () => {
    const iii567YzRed4PresetGraphql =
      iii567YzRed4().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-red-4",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 12000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20234 from './x-456-yz-2023-4';

describe(`with x456Yz20234 preset`, () => {
  it(`should return a x456Yz20234 preset`, () => {
    const x456Yz20234Preset = x456Yz20234().build<TStandalonePriceDraft>();
    expect(x456Yz20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2023-4",
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a x456Yz20234 preset when built for graphql`, () => {
    const x456Yz20234PresetGraphql =
      x456Yz20234().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2023-4",
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

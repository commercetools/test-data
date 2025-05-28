import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20231 from './x-456-yz-2023-1';

describe(`with x456Yz20231 preset`, () => {
  it(`should return a x456Yz20231 preset`, () => {
    const x456Yz20231Preset = x456Yz20231().build<TStandalonePriceDraft>();
    expect(x456Yz20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2023-1",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1452000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a x456Yz20231 preset when built for graphql`, () => {
    const x456Yz20231PresetGraphql =
      x456Yz20231().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2023-1",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1452000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

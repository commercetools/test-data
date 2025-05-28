import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20231 from './ee-567-yz-2023-1';

describe(`with ee567Yz20231 preset`, () => {
  it(`should return a ee567Yz20231 preset`, () => {
    const ee567Yz20231Preset = ee567Yz20231().build<TStandalonePriceDraft>();
    expect(ee567Yz20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2023-1",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2640000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ee567Yz20231 preset when built for graphql`, () => {
    const ee567Yz20231PresetGraphql =
      ee567Yz20231().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2023-1",
        "recurrencePolicy": undefined,
        "sku": "ee567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2640000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});

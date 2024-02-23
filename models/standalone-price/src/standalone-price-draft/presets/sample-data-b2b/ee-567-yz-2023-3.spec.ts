import type { TStandalonePriceDraft } from '../../../types';
import ee567Yz20233 from './ee-567-yz-2023-3';

describe(`with ee567Yz20233 preset`, () => {
  it(`should return a ee567Yz20233 preset`, () => {
    const ee567Yz20233Preset = ee567Yz20233().build<TStandalonePriceDraft>();
    expect(ee567Yz20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2023-3",
        "sku": "ee567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3080000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ee567Yz20233 preset when built for graphql`, () => {
    const ee567Yz20233PresetGraphql =
      ee567Yz20233().buildGraphql<TStandalonePriceDraft>();
    expect(ee567Yz20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ee567-yz-2023-3",
        "sku": "ee567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3080000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
